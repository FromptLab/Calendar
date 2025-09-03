import {
  useCreatePostMutation,
  usePostsQuery,
} from "@/entities/home/hooks/usePostsQueries";
import { useCallback, useState } from "react";
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { data: postsResponse, isLoading, error } = usePostsQuery();
  const { mutate: createPostMutation } = useCreatePostMutation();

  const posts = postsResponse?.data || [];

  const submitPost = useCallback(() => {
    if (!title.trim() || !content.trim()) {
      Alert.alert("오류", "제목과 내용을 입력해주세요.");
      return;
    }

    createPostMutation({ title: title.trim(), content: content.trim() });
    setTitle("");
    setContent("");
  }, [title, content, createPostMutation]);

  if (isLoading) {
    return (
      <View>
        <Text>로딩 중...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>에러가 발생했습니다.</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>게시글</Text>

      {/* 글 작성 폼 */}
      <View
        style={{
          marginBottom: 20,
          padding: 15,
          backgroundColor: "#f9f9f9",
          borderRadius: 8,
        }}
      >
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "#ddd",
            padding: 10,
            marginBottom: 10,
            borderRadius: 5,
          }}
          placeholder='제목을 입력하세요'
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "#ddd",
            padding: 10,
            marginBottom: 10,
            borderRadius: 5,
            height: 80,
          }}
          placeholder='내용을 입력하세요'
          value={content}
          onChangeText={setContent}
          multiline
        />
        <TouchableOpacity
          style={{
            backgroundColor: "#007AFF",
            padding: 12,
            borderRadius: 5,
            alignItems: "center",
          }}
          onPress={submitPost}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>글 작성</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              marginBottom: 15,
              padding: 10,
              backgroundColor: "#f5f5f5",
              borderRadius: 8,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {item.title}
            </Text>
            <Text style={{ marginTop: 5 }}>{item.content}</Text>
          </View>
        )}
      />
    </View>
  );
}
