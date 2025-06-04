export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">🏺 지역기반 중고거래 경매</h1>
        <p className="text-xl text-gray-600 mb-8">우리 동네에서 안전하게 거래하는 경매 서비스</p>

        {/* 설정 완료 상태 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4">
            <h3 className="font-semibold text-green-600 mb-2">✅ 개발 환경</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>Next.js 15.2.3</li>
              <li>TypeScript 5.8.2</li>
              <li>React 19.1.0</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4">
            <h3 className="font-semibold text-green-600 mb-2">✅ 도구 설정</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>ESLint + Prettier</li>
              <li>Lefthook</li>
              <li>Tailwind CSS v4</li>
            </ul>
          </div>
        </div>

        {/* 테스트 버튼 */}
        <div className="space-x-4">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md font-medium hover:bg-purple-700 transition-colors">
            경매 참여하기
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-300 transition-colors">
            상품 둘러보기
          </button>
        </div>
      </div>
    </main>
  );
}
