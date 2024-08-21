export default function Viewer(props: {html: string, css: string, js: string}) {
    return (
        <div className="bg-white shadow-md rounded-lg w-full h-full">
            <iframe
                className="w-full h-full"
                srcDoc={`
                <html>
                    <head>
                        <style>${props.css}</style>
                    </head>
                    <body>
                        ${props.html}
                        <script>${props.js}</script>
                    </body>
                </html>
            `}/>
        </div>
    );
};