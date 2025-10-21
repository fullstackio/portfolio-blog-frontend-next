export default function BlogsPage() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-4xl sm:text-6xl font-bold text-center">
        My <span className="text-blue-600">Thoughts</span>
      </h1>
      <p className="text-center text-lg sm:text-xl max-w-2xl">
        This is a sample application built with Next.js and Tailwind CSS.
        Explore the features and enjoy your experience!
      </p>
    </div>
  );
}
