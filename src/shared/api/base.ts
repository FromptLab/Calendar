import { supabase } from "./supabase";

export const createApiClient = <T>(tableName: string) => ({
  async fetchAll(options?: {
    orderBy?: string;
    ascending?: boolean;
    limit?: number;
  }) {
    try {
      let query = supabase.from(tableName).select("*");
      
      if (options?.orderBy) {
        query = query.order(options.orderBy, { ascending: options.ascending ?? false });
      }
      
      if (options?.limit) {
        query = query.limit(options.limit);
      }

      const { data, error } = await query;

      if (error) {
        console.error("Error:", error);
        return { data: null, error: error.message };
      }

      return { data: data as T[], error: null };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
      console.error("Fetch error:", err);
      return { data: null, error: errorMessage };
    }
  },

  async fetchById(id: number | string) {
    try {
      const { data, error } = await supabase
        .from(tableName)
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error:", error);
        return { data: null, error: error.message };
      }

      return { data: data as T, error: null };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
      console.error("Fetch error:", err);
      return { data: null, error: errorMessage };
    }
  },

  async create(item: Omit<T, "id" | "created_at">) {
    try {
      const { data, error } = await supabase
        .from(tableName)
        .insert(item as any)
        .select()
        .single();

      if (error) {
        console.error("Error:", error);
        return { data: null, error: error.message };
      }

      return { data: data as T, error: null };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
      console.error("Create error:", err);
      return { data: null, error: errorMessage };
    }
  }
});