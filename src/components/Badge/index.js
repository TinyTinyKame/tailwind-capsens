function Badge({ text }) {
  return (
    <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full flex justify-center items-center text-sm bg-pokeball shadow-md">
      {text}
    </div>
  );
}

export default Badge;
