import { useParams, Link } from 'react-router-dom';
import categoriesData from '../data/categoriesData';
import coursesData from '../data/coursesData';

export default function TrainingCategory() {
  const { categorySlug } = useParams();
  const category = categoriesData[categorySlug];

  if (!category) {
    return (
      <div className="pt-48 pb-20 text-center text-slate-900">
        <h2 className="text-3xl font-bold mb-4">Category Not Found</h2>
        <Link to="/training" className="text-blue-600 hover:underline">Back to Training</Link>
      </div>
    );
  }

  const categoryCourses = Object.entries(coursesData)
    .filter(([_, course]) => course.category === categorySlug)
    .map(([slug, course]) => ({ ...course, slug }));

  return (
    <div className="pb-24">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-12">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 bottom-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-600 opacity-20 blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10">
          <Link to="/training" className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-all mb-8 group font-semibold">
            <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
            Back to Training
          </Link>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
            <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center text-slate-900 shadow-lg`}>
              <span className="material-symbols-outlined text-4xl">{category.icon}</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {category.title}
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed mb-8">
            {category.description}
          </p>
        </div>
      </section>

      {/* Courses List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryCourses.length > 0 ? (
              categoryCourses.map((course) => (
                <article key={course.slug} className="bg-white shadow-sm border border-slate-200 rounded-3xl overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all flex flex-col group h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                       <span className="px-3 py-1 bg-blue-100 backdrop-blur-md text-blue-700 text-[10px] font-bold rounded-full border border-blue-200 uppercase tracking-widest">{course.level}</span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-4 text-xs text-slate-500 font-bold uppercase tracking-tighter">
                      <span>{course.duration}</span>
                      <span>{course.price}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                      <Link to={`/training/${course.slug}`}>{course.title}</Link>
                    </h3>
                    <p className="text-slate-600 text-sm mb-8 flex-grow leading-relaxed line-clamp-3">
                      {course.description}
                    </p>
                    <Link to={`/training/${course.slug}`} className="w-full py-4 bg-white hover:bg-blue-600 text-slate-900 hover:text-white rounded-xl font-bold text-center transition-all border border-slate-200 hover:border-transparent flex items-center justify-center gap-2">
                       Explore Course <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                </article>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <p className="text-slate-500 italic">No courses currently listed for this category. New modules arriving soon.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
