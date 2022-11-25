import { useMantineTheme } from "@mantine/core"

const SvgComponent = (props) => {
  const theme = useMantineTheme()
  return (
    <svg
      width={980.6}
      height={548}
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      {...props}
    >
      <path
        fill={theme.colorScheme == 'dark' ? '#fff' : "#e1e1e5"}
        d="M298.2 467.6h118.4v73.9H298.2v-73.9z"
        className="st322"
      />
      <path fill={theme.colorScheme == 'dark' ? 'white' : 'black'} d="M686 9H27.6c-8.4 0-15.1 6.8-15.1 15.1v431.7c0 8.4 6.8 15.1 15.1 15.1H686c8.4 0 15.1-6.8 15.1-15.1V24.1c0-8.3-6.8-15.1-15.1-15.1zm5 14.3v433.5c0 2.3-1.9 4.2-4.2 4.2h-660c-2.3 0-4.2-1.9-4.2-4.2V23.3c0-2.3 1.9-4.2 4.2-4.2h660.1c2.2 0 4.1 1.9 4.1 4.2z" />
      <path
        fill="#c9c8cc"
        d="M260.6 535h193c0 5.5-4.5 10-10 10h-173c-5.5 0-10-4.5-10-10z"
        className="st323"
      />
      <path
        fill="transparent"
        d="M691 23.3v433.5c0 2.3-1.9 4.2-4.2 4.2h-660c-2.3 0-4.2-1.9-4.2-4.2V23.3c0-2.3 1.9-4.2 4.2-4.2h660.1c2.2 0 4.1 1.9 4.1 4.2z"
      />
      <path
        fill="#80ed99"
        d="M520.7 456.9v61.2h30.7v-61.2c0-9.3-6.9-16.8-15.3-16.8-8.5.1-15.4 7.6-15.4 16.8z"
        className="st330"
      />
      <path
        fill="#80ed99"
        d="M560.1 494.9h-21.7a6.7 6.7 0 0 1 0-13.4h21.7c.8 0 1.4-.6 1.4-1.4V472a6.7 6.7 0 0 1 13.4 0v8.1c0 8.2-6.7 14.8-14.8 14.8z"
        className="st330"
      />
      <path
        fill="#80ed99"
        d="M531.5 504.9h-19.8c-7.6 0-13.7-6.5-13.7-14.4v-3.2c0-3.5 2.8-6.4 6.4-6.4 3.5 0 6.4 2.8 6.4 6.4v3.2c0 1 .6 1.7 1 1.7h19.8c3.5 0 6.4 2.8 6.4 6.4s-2.9 6.3-6.5 6.3z"
        className="st330"
      />
      <path
        fill="#e1e1e5"
        d="m505.1 515.5 2.4 18.3.1.8c0 .2.1.5.1.7h56.4c0-.2.1-.5.1-.7l.1-.8 2.4-18.3h-61.6z"
        className="st322"
      />
      <path
        fill="#c9c8cc"
        d="M507.7 535.3c1 5.1 5.4 8.8 10.6 8.8h35.1c5.2 0 9.6-3.7 10.6-8.8h-56.3z"
        className="st323"
      />
    </svg>
  )
  
}
export default SvgComponent
