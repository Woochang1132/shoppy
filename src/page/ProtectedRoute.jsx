export default function ProtectedRoute({children, requireAdmin}) {
    // 1. 로그인 한 사용자가 있는 지 확인 ==> 아니라면 / 경로 보내기
    // 2. 그 사용자가 admin 권한이 있는지 ==> 없다면, cart까지만 가능하고 new 접근 시 return 
    // 3. requireAdmin이 true인 경우에는 로그인도 되어 있는지 같이 확인하기 ==> 로그인이 안 되어 있을 수도 있는 예외
    // 4. 조건에 맞는 경우에만 chrildern 보여주기
}




