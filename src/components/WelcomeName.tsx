interface WelcomeNameProps {
  userName?: string
}

export default function WelcomeName(props: WelcomeNameProps) {
  return (
    <div className="flex flex-col p-5">
      <p className=" text-sm text-white">Bem vindo,</p>
      <h1 className="pl-2 font-sans text-xl font-semibold text-yellow-400">
        {props.userName}
      </h1>
    </div>
  )
}
