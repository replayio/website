import { useEffect, useState } from "react"


const items = [
  {
    header:"Bug Reports 🐛", 
    subtitle: "Submit the perfect bug report that does not need to be reproduced.", 
    href:"https://www.notion.so/replayio/Use-Cases-e64fea3c289e40998a0646c8530d3fe4#5325bd872731431bae8a3aff1e5c536e" 
  },
  {
    header:"End-to-End Tests 🍞" , 
    subtitle: "Record end-to-end tests so you never have to reproduce a flakey test again.", 
    href:"https://www.notion.so/replayio/Use-Cases-e64fea3c289e40998a0646c8530d3fe4#599eada9069243c8995f6d1dda4d95ef"
  },
  {
    header: "UI Elements 😱", 
    subtitle: "Record janky flows so you can create buttery smooth experiences.", 
    href:"https://www.notion.so/replayio/Use-Cases-e64fea3c289e40998a0646c8530d3fe4#0bf6455f27c14e2487585f7be770c02a"
  },
  {
    header: "Slack Conversations 👋", 
    subtitle: "Get feedback on a new feature or advice on a pesky problem.", 
    href:"https://www.notion.so/replayio/Use-Cases-e64fea3c289e40998a0646c8530d3fe4#ff84f026c54a434fa66097da071fa856"
  },
  {
    header: "Code Reviews 🤷", 
    subtitle: "Compare before and after replays to see what's different.", 
    href:"https://www.notion.so/replayio/Use-Cases-e64fea3c289e40998a0646c8530d3fe4#7925e50b19c444268867bcd4f357604c"
  }
]
function MenuItem({item}) {
  return <a href={item.href} className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
  <p className="text-base font-medium text-gray-900">
    {item.header}
  </p>
  <p className="mt-1 text-sm text-gray-500">
    {item.subtitle}
  </p>
  </a>
}


export default function Flyout() {
  const [isShown, setShown] = useState(false);



// <!-- This example requires Tailwind CSS v2.0+ -->
return <>  
  <div className="relative">
    {/* <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" --> */}
    <button type="button" className="text-gray-500 group  rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false">
      <span onClick={(e) => setShown(!isShown)}>Use Cases</span>
      {/* <!--
        Heroicon name: solid/chevron-down

        Item active: "text-gray-600", Item inactive: "text-gray-400"
      --> */}
      <svg className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>

    {/* <!--
      Flyout menu, show/hide based on flyout menu state.

      Entering: "transition ease-out duration-200"
        From: "opacity-0 translate-y-1"
        To: "opacity-100 translate-y-0"
      Leaving: "transition ease-in duration-150"
        From: "opacity-100 translate-y-0"
        To: "opacity-0 translate-y-1"
    --> */}
    <div className={`${isShown ? " transition ease-out duration-200 opacity-100 translate-y-0" : "hidden transition ease-in duration-150 opacity-0 translate-y-1"} absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0`} style={{zIndex:10}}>
      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
          {items.map(item => <MenuItem item={item} />)}
        </div>
      </div>
    </div>
  </div>
  {isShown && <div onClick={() => setShown(false)} className="" style={{width: "100%", zIndex: 1, height: "100%", position: "fixed", left: 0, top: 0}}  ></div>}
</>
}