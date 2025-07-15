export default function InsightPage() {
  const dummyPosts = [
    {
      href: '#',
      thumbnail: '/img/service_a.png', // 추후 교체
      category: 'Ideas',
      title: 'Top successful AI chatbots based on peoples feedback',
      summary: 'Qroin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra…',
      date: 'October 10, 2022',
      comments: 0,
    },
    // 필요시 더 추가
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {dummyPosts.map((post, i) => (
        <article key={i} className="bg-white shadow rounded overflow-hidden">
          <div className="relative">
            <div
              className="h-60 bg-cover bg-center"
              style={{ backgroundImage: `url(/img/service_a.png)` }}
            >
              <div className="absolute inset-0 bg-black/10 hover:bg-black/30 transition" />
              <a href={post.href} className="absolute inset-0" aria-hidden="true" />
            </div>
          </div>

          <div className="p-4">
            <div className="text-xs text-gray-400">{post.category}</div>
            <h4 className="text-lg font-semibold mt-1">
              <a href={post.href}>{post.title}</a>
            </h4>
            <p className="text-sm text-gray-500 mt-2">{post.summary}</p>
            <div className="text-xs text-gray-400 mt-4 flex justify-between items-center">
              <span>{post.date}</span>
              <span>{post.comments} Comments</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
