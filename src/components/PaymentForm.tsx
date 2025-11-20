import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CartItem } from "./Cart";

export const BACKEND_BASE_URL = "https://karuna-kodwani-backend.vercel.app";

declare global {
  interface Window {
    BACKEND_BASE_URL?: string;
  }
}

if (typeof window !== "undefined") {
  window.BACKEND_BASE_URL = window.BACKEND_BASE_URL || BACKEND_BASE_URL;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface PaymentFormProps {
  cartItems: CartItem[];
  total: number;
  onPaymentComplete: () => void;
  onCancel: () => void;
}

export function PaymentForm({
  cartItems,
  total,
  onPaymentComplete,
  onCancel,
}: PaymentFormProps) {
  const [loading, setLoading] = useState(false);

  // Local breakdown so UI clearly shows how total is calculated
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const gst = Math.round(subtotal * 0.18); // 18% GST (matches App.calculateTotal)
  const computedTotal = subtotal + gst;

  // Utility to load Razorpay script dynamically
  const loadRazorpayScript = () => {
    return new Promise((resolve, reject) => {
      if (window.Razorpay) return resolve(true);
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => reject("Razorpay SDK failed to load.");
      document.body.appendChild(script);
    });
  };

  const handleCheckout = async () => {
    setLoading(true);

    // Step 1: Create order in backend
    const response = await fetch(BACKEND_BASE_URL + "/api/v1/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: total }),
    });
    const data = await response.json();
    setLoading(false);

    if (!data.success) {
      alert("Failed to create order.");
      return;
    }

    // Step 2: Get Razorpay Key from backend
    const keyRes = await fetch(BACKEND_BASE_URL + "/api/v1/get-key");
    const keyData = await keyRes.json();

    await loadRazorpayScript();

    // Step 3: Prepare Razorpay options
    const options = {
      key: keyData.key,
      amount: data.order.amount,
      currency: data.order.currency,
      name: "Your Brand",
      description: "Order Checkout",
      order_id: data.order.id,
      handler: async function (response: any) {
        // Step 4: Verify payment
        setLoading(true);
        const verifyRes = await fetch(
          BACKEND_BASE_URL + "/api/v1/verify-payment",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          }
        );
        setLoading(false);
        const verifyJson = await verifyRes.json();
        if (verifyJson.success) {
          alert("Payment Successful!");
          onPaymentComplete();
        } else {
          alert("Payment Verification Failed!");
        }
      },
      prefill: {
        // Optionally add user info if available
        name: "",
        email: "",
      },
      notes: {
        items: JSON.stringify(
          cartItems.map((i) => ({ name: i.name, quantity: i.quantity }))
        ),
      },
      theme: { color: "#1976d2" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <Card
      style={{
        maxWidth: 480,
        minWidth: 360,
        margin: "2.5rem auto",
        padding: "2.2rem 2rem 2rem 2rem",
        borderRadius: "22px",
        boxShadow: "0 6px 28px rgba(60,60,60,0.18)",
        background: "#fff",
      }}
    >
      <CardHeader>
        <CardTitle
          style={{
            fontSize: "1.35rem",
            marginBottom: 18,
            color: "#232323",
            fontWeight: 600,
            letterSpacing: 0.4,
          }}
        >
          Checkout
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          {cartItems.length === 0 ? (
            <div>Your cart is empty.</div>
          ) : (
            <table
              style={{
                width: "100%",
                marginBottom: "1.5rem",
                borderCollapse: "separate",
                borderSpacing: 0,
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      fontSize: "1rem",
                      fontWeight: 500,
                      color: "#232323",
                      paddingBottom: 8,
                    }}
                  >
                    Service
                  </th>
                  <th
                    style={{
                      textAlign: "center",
                      fontSize: "1rem",
                      fontWeight: 500,
                      color: "#232323",
                      paddingBottom: 8,
                    }}
                  >
                    Quantity
                  </th>
                  <th
                    style={{
                      textAlign: "right",
                      fontSize: "1rem",
                      fontWeight: 500,
                      color: "#232323",
                      paddingBottom: 8,
                    }}
                  >
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td style={{ fontWeight: 450, paddingBottom: 5 }}>
                      {item.name}
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        fontWeight: 400,
                        paddingBottom: 5,
                      }}
                    >
                      {item.quantity}
                    </td>
                    <td
                      style={{
                        textAlign: "right",
                        fontWeight: 450,
                        paddingBottom: 5,
                      }}
                    >
                      ₹{item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <div
            style={{
              fontWeight: 400,
              fontSize: "0.975rem",
              color: "#232323",
              marginBottom: "1rem",
              borderRadius: 8,
              padding: "0.6rem",
              background: "#fbfbff",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 6,
              }}
            >
              <span>Subtotal</span>
              <span>₹{subtotal.toLocaleString()}</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 6,
              }}
            >
              <span>GST (18%)</span>
              <span>₹{gst.toLocaleString()}</span>
            </div>
            <div
              style={{ height: 1, background: "#e6e6e6", margin: "8px 0" }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontWeight: 700,
                color: "#1976d2",
                fontSize: "1.05rem",
              }}
            >
              <span>Total</span>
              <span>₹{(total ?? computedTotal).toLocaleString()}</span>
            </div>
            {total !== computedTotal && (
              <div style={{ marginTop: 6, fontSize: "0.8rem", color: "#666" }}>
                Note: Displayed total may include rounding adjustments.
              </div>
            )}
          </div>
          <div
            style={{
              display: "flex",
              gap: "1.3rem",
              justifyContent: "flex-end",
            }}
          >
            <Button
              variant="outline"
              onClick={onCancel}
              style={{
                padding: "0.55rem 1.5rem",
                fontSize: "1rem",
                borderRadius: "7px",
                fontWeight: 500,
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleCheckout}
              disabled={loading || cartItems.length === 0}
              style={{
                padding: "0.55rem 1.5rem",
                fontSize: "1rem",
                background: "#1976d2",
                color: "#fff",
                borderRadius: "7px",
                fontWeight: 500,
                boxShadow: loading
                  ? "none"
                  : "0 3px 16px rgba(25,118,210,0.13)",
              }}
            >
              {loading ? "Processing..." : "Checkout"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
