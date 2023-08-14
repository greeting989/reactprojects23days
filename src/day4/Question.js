import React from "react";

const Question = ({ question }) => {
  return (
    <div>
      <div class="flex flex-col items-center">
        <h2 class="font-bold text-zinc-200 text-5xl mt-5 tracking-tight">FAQ</h2>
        <p class="text-zinc-200 text-xl mt-3">Frequenty asked questions</p>
      </div>
      {question.map((que, index) => {
        return (
          <div
            class="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen"
            key={index}
          >
            <div class="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
              <div class="py-5">
                <details class="group">
                  <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>{que.question}</span>
                    <span class="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    {que.answer}
                  </p>
                </details>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Question;
