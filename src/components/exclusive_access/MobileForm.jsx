import { Drawer } from "vaul";

export const MobileForm2 = ({ trigger, children }) => {
  return (
    <Drawer.Root>
      <Drawer.Trigger>{trigger}</Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Content>{children}</Drawer.Content>

        <Drawer.Overlay />
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export const MobileForm = ({ children, trigger }) => {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>{trigger}</Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="fixed bottom-0 left-0 right-0 z-40 flex flex-col mt-24 rounded-t-3xl">
          <div className="flex-1 p-4 bg-white rounded-t-3xl">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
            <div className="max-w-md py-16 mx-auto overflow-y-auto">
              <Drawer.Title className="my-5 font-medium sr-only">
                Sign Up
              </Drawer.Title>
              {children}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 mt-auto border-t bg-zinc-100 border-zinc-200">
            <div className="flex justify-end max-w-md gap-6 mx-auto">
              <a
                className="text-xs text-zinc-600 flex items-center gap-0.25"
                href="https://github.com/PrashantAmoli/TryLoch"
                target="_blank"
              >
                GitHub
                <svg
                  fill="none"
                  height="16"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  width="16"
                  aria-hidden="true"
                  className="w-3 h-3 ml-1"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14L21 3"></path>
                </svg>
              </a>
              <a
                className="text-xs text-zinc-600 flex items-center gap-0.25"
                href="https://twitter.com/loch_chain_"
                target="_blank"
              >
                Twitter
                <svg
                  fill="none"
                  height="16"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  width="16"
                  aria-hidden="true"
                  className="w-3 h-3 ml-1"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14L21 3"></path>
                </svg>
              </a>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
