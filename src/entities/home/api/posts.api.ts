import { createApiClient } from "@/shared/api/base";
import { Post } from "../model/types";

const postsApi = createApiClient<Post>("posts");

export const fetchPosts = async () => {
  const { data, error } = await postsApi.fetchAll({
    orderBy: "created_at", // 정렬 기준 필드
    ascending: false, // false 오름차순, true 내림차순
  });

  if (error) {
    console.error("Error:", error);
    return { data: [], error };
  }

  return { data: data || [], error: null };
};

export const createPost = async (title: string, content: string) => {
  const { data, error } = await postsApi.create({
    title,
    content,
  });

  if (error) {
    console.error("Create post error:", error);
    return { data: null, error };
  }

  return { data, error: null };
};
