"use client";

import Editor from "@monaco-editor/react";

export default function Monaco(props: { language: string, pipe: Function }) {
    return (
        <div className="w-full h-full">
            <Editor
                theme="vs-dark"
                defaultLanguage={props.language}
                defaultValue=''
                onChange={(value, event) => {
                    props.pipe(value);
                }}
                options={
                    {
                        minimap: {
                            enabled: false,
                        },
                        fontFamily: "JetBrains Mono",
                        fontLigatures: true,
                        fontSize: 16,
                        wordWrap: "wordWrapColumn",
                        wordWrapColumn: 50,
                        wrappingIndent: "indent",
                    }
                }
            />
        </div>
    );
}