export const StackSpan = ({ tag, idx }: { tag: string; idx: number }) => {
  return (
    <span
      key={idx}
      className="whitespace-nowrap rounded-md bg-gray-200 px-3 pb-[3px] pt-[4px] text-sm text-gray-700"
    >
      {tag}
    </span>
  );
};
