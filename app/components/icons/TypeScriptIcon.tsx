interface Props {
  className: string
}

function TypeScriptIcon({ className }: Props) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g fill="none">
        <g clipPath="url(#akarIconsTypescriptFill0)">
          <path fill="currentColor" d="M23.429 0H.57A.571.571 0 0 0 0 .571V23.43a.57.57 0 0 0 .571.571H23.43a.571.571 0 0 0 .571-.571V.57a.571.571 0 0 0-.572-.57Zm-9.143 12.826h-2.857v8.888H9.143v-8.888H6.286v-1.969h8v1.969Zm.64 8.38v-2.375s1.298.978 2.855.978s1.497-1.018 1.497-1.158c0-1.477-4.412-1.477-4.412-4.751c0-4.452 6.429-2.695 6.429-2.695l-.08 2.116s-1.078-.719-2.296-.719c-1.218 0-1.657.58-1.657 1.198c0 1.597 4.452 1.438 4.452 4.652c0 4.95-6.788 2.755-6.788 2.755Z"></path>
        </g>
        <defs>
          <clipPath id="akarIconsTypescriptFill0">
            <path fill="#fff" d="M0 0h24v24H0z"></path>
          </clipPath>
        </defs>
      </g>
    </svg>
  )
}

export default TypeScriptIcon