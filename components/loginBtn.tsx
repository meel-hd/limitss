import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginBtn() {
  const { data: session,status } = useSession()
  if (session) {
    return (
      <>
      {status}
        Signed in as {session.user.email} <br />
        <img width={40} height={40} alt="profile" src={session.user.image}/> <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn('github',{callbackUrl:'/setup'})}>Sign in</button>
    </>
  )
}