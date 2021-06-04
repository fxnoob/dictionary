/* eslint-disable react/prop-types,max-len */
import IFrame from "react-frame-component";

const initialContent = () => {
  return `<!DOCTYPE html>
    <html>
      <head>
        <style>
        body {
            margin: 0px;
            
        }
        .px-6 {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
        }
        .py-4 {
            padding-top: 1rem;
            padding-bottom: 1rem;
        }
        .items-center {
            align-items: center;
        }
        
        .flex {
            display: flex;
        }
        .ml-4 {
            margin-left: 1rem;
        }
        .text-sm {
            font-size: 0.875rem;
        }
        .text-gray-900 {
            --text-opacity: 1;
            color: #161e2e;
            color: rgb(22, 30, 46);
        }
        .text-gray-700 {
            --text-opacity: 1;
            color: #6b7280;
            color: rgb(55, 65, 81);
        }
        .text-gray-500 {
            --text-opacity: 1;
            color: #6b7280;
            color: rgb(107, 114, 128);
        }
        #audio-icon {
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAcUlEQVQ4y2P4//8/AyUYQhAH3gNxA7IAIQPmo/H3g/QA8XkgFiBkwHyoYnRQABVfj88AmGZcTuuHyjlgMwBZM7IE3NlQGhQe65EN+I8Dw8MLGgYoFpFqADK/YUAMwOsFigORatFIlYRElaRMWmaiBAMAp0n+3U0kqkAAAAAASUVORK5CYII=);
            background-position: center;
            background-repeat: no-repeat;
            cursor: pointer;
            margin-left: 8px;
            opacity: 0.5;
            width: 16px;
        }
      </style>
      </head>
      <body>
        <div id="page" class="page"></div>
      </body>
    </html>`;
};

function FrameComponent(props) {
  const { children, ...other } = props;
  return (
    <IFrame
      initialContent={initialContent()}
      {...other}
    >
      {children}
    </IFrame>
  );
}
export default FrameComponent;