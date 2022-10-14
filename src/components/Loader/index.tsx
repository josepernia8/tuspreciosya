import "./index.css"

interface Props extends React.ComponentProps<"div"> {
  size: string
  extraStyles?: object
}

const Loader = ({size, extraStyles}: Props) => (
  <>
    <span className="loader" style={{width: size, height: size, ...extraStyles}}></span>
    <style>{`\
      .loader:after {\
        width: ${size};\
        height: ${size};\
      }\
    `}</style>
  </>
)

export default Loader
