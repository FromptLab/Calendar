module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // ✨ 새로운 기능
        "fix", // 🐛 버그 수정
        "docs", // 📝 문서 변경
        "style", // 💄 코드 스타일 변경 (포매팅, 세미콜론 등)
        "refactor", // ♻️ 리팩토링
        "perf", // ⚡ 성능 개선
        "test", // ✅ 테스트 추가/수정
        "chore", // 🔧 빌드 과정 또는 보조 도구 변경
        "ci", // 👷 CI 설정 변경
        "build", // 📦 빌드 시스템 변경
        "revert", // ⏪ 커밋 되돌리기
      ],
    ],
    "subject-case": [0], // 제목 케이스 검사 비활성화 (한국어 지원)
    "subject-max-length": [2, "always", 50], // 제목 최대 50자
    "body-max-line-length": [2, "always", 100], // 본문 한 줄 최대 100자
  },
};
