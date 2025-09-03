import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createPost, fetchPosts } from "../api/posts.api";

export const POSTS_QUERY_KEY = ["posts"] as const;

export const usePostsQuery = () => {
  return useQuery({
    queryKey: POSTS_QUERY_KEY,
    queryFn: fetchPosts,
  });
};

export const useCreatePostMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ title, content }: { title: string; content: string }) =>
      createPost(title, content),
    onSuccess: (response) => {
      if (!response.error) {
        queryClient.invalidateQueries({ queryKey: POSTS_QUERY_KEY });
      }
    },
  });
};
