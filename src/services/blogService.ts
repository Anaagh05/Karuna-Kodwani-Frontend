// Blog API Service for Main Website
const API_BASE_URL = "https://karuna-kodwani-backend.vercel.app/api/v1";

export interface BlogPost {
  id: number;
  title: string;
  smallDescription: string;
  mainDescription: string;
  authorName: string;
  estimateReadTime: number;
  category: string;
  tags: string[];
  blogImage: string;
  createdAt: string;
}

// Fetch all blogs with optional category filter
export const fetchBlogs = async (category?: string): Promise<BlogPost[]> => {
  try {
    const url = category && category !== "All" 
      ? `${API_BASE_URL}/get-blogs?category=${category.toLowerCase()}`
      : `${API_BASE_URL}/get-blogs`;
    
    const response = await fetch(url);
    const data = await response.json();

    if (data.success) {
      return data.data;
    } else {
      console.error("Failed to fetch blogs:", data.message);
      return [];
    }
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};

// Fetch individual blog by ID
export const fetchBlogById = async (id: string): Promise<BlogPost | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/get-blog/${id}`);
    const data = await response.json();

    if (data.success) {
      return data.data;
    } else {
      console.error("Failed to fetch blog:", data.message);
      return null;
    }
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
};