import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface QuestionnaireFormProps {
  onComplete: () => void;
}

export function QuestionnaireForm({ onComplete }: QuestionnaireFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    goals: [] as string[],
    healthConditions: "",
    dietaryRestrictions: "",
    experience: "",
    availability: "",
  });
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let errs: any = {};
    if (!formData.name) errs.name = "Name required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = "Valid email required";
    if (!formData.phone || !/^[6-9]\d{9}$/.test(formData.phone)) errs.phone = "Valid 10-digit Indian phone required";
    if (!formData.age || isNaN(Number(formData.age)) || Number(formData.age) < 1) errs.age = "Valid age required";
    return errs;
  };

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mwpwayqd";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setLoading(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setLoading(false);
      if (res.ok) {
        onComplete();
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch {
      setLoading(false);
      alert("Submission error.");
    }
  };

  const toggleGoal = (goal: string) => {
    setFormData((prev) => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter((g) => g !== goal)
        : [...prev.goals, goal],
    }));
  };

  const goalOptions = [
    "Weight Management", "Stress Reduction", "Improved Flexibility", "Better Sleep",
    "Increased Energy", "Mental Clarity", "Personal Growth", "Disease Prevention"
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Questionnaire</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            maxWidth: 600,
            margin: "0 auto"
          }}
        >
          {/* Field Row */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Label>
              Name
              <Input type="text" value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                style={{ marginTop: 4 }} />
              {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
            </Label>
            <Label>
              Email
              <Input type="email" value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                style={{ marginTop: 4 }} />
              {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
            </Label>
            <Label>
              Phone
              <Input type="tel" value={formData.phone} maxLength={10}
                onChange={e => setFormData({ ...formData, phone: e.target.value.replace(/\D/, "") })}
                style={{ marginTop: 4 }} />
              {errors.phone && <div style={{ color: "red" }}>{errors.phone}</div>}
            </Label>
            <Label>
              Age
              <Input type="number" min={1} value={formData.age}
                onChange={e => setFormData({ ...formData, age: e.target.value })}
                style={{ marginTop: 4 }} />
              {errors.age && <div style={{ color: "red" }}>{errors.age}</div>}
            </Label>
            <Label>
              Gender
              <Input type="text" value={formData.gender}
                onChange={e => setFormData({ ...formData, gender: e.target.value })}
                style={{ marginTop: 4 }} />
            </Label>
            {/* Goals with Wrap Row */}
            <Label>
              Goals:
              <div style={{
                marginTop: 8,
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                rowGap: "0.5rem",
              }}>
                {goalOptions.map(goal => (
                  <label key={goal} style={{
                    display: "flex",
                    alignItems: "center",
                    minWidth: 180
                  }}>
                    <input
                      type="checkbox"
                      checked={formData.goals.includes(goal)}
                      onChange={() => toggleGoal(goal)}
                      style={{ marginRight: 6 }}
                    /> {goal}
                  </label>
                ))}
              </div>
            </Label>
            <Label>
              Health Conditions
              <Input type="text" value={formData.healthConditions}
                onChange={e => setFormData({ ...formData, healthConditions: e.target.value })}
                style={{ marginTop: 4 }} />
            </Label>
            <Label>
              Dietary Restrictions
              <Input type="text" value={formData.dietaryRestrictions}
                onChange={e => setFormData({ ...formData, dietaryRestrictions: e.target.value })}
                style={{ marginTop: 4 }} />
            </Label>
            <Label>
              Experience
              <Input type="text" value={formData.experience}
                onChange={e => setFormData({ ...formData, experience: e.target.value })}
                style={{ marginTop: 4 }} />
            </Label>
            <Label>
              Availability
              <Input type="text" value={formData.availability}
                onChange={e => setFormData({ ...formData, availability: e.target.value })}
                style={{ marginTop: 4 }} />
            </Label>
          </div>
          <Button type="submit" disabled={loading} style={{ alignSelf: "flex-start" }}>
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
