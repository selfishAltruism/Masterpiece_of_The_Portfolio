export const StackSpan = ({ tag, idx }: { tag: string; idx: number }) => {
  return (
    <span
      key={idx}
      className="whitespace-nowrap rounded-sm bg-white px-3 pb-[3px] pt-[4px] text-sm text-gray-700"
    >
      {tag}
    </span>
  );
};
