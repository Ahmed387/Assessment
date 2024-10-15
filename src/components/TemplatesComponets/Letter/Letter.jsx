const Letter = () => {
  // Get current date
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-10">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Main Letter Card */}
        <div
          className="bg-white p-8 sm:p-12 lg:p-16 rounded-lg shadow-lg border border-gray-300 
          bg-gradient-to-b from-gray-50 to-white"
        >
          {/* Decorative Flourish at the Top */}
          <div className="text-center mb-6">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-serif text-indigo-600">
              ✿
            </div>
          </div>

          {/* Sender Information with Responsive Soft Colors */}
          <div className="text-right mb-6 sm:mb-8">
            <p className="text-indigo-700 font-bold text-lg sm:text-xl lg:text-2xl">
              Ahmed Salah Fadl
            </p>
            <p className="text-gray-600 text-sm sm:text-base">
              Cairo, Nasr City
            </p>
            <p className="text-gray-600 text-sm sm:text-base">
              (+20)1004749699
            </p>
            <p className="text-gray-600 text-sm sm:text-base">
              ahmed@example.com
            </p>
          </div>

          {/* Automatic Date */}
          <div className="text-right mb-8">
            <p className="text-gray-500 text-sm sm:text-base">
              {formattedDate}
            </p>{" "}
            {/* Dynamic Date */}
          </div>

          {/* Horizontal Divider with a Floral Decoration */}
          <div className="border-t-2 border-gray-300 my-6 relative">
            <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-indigo-600 text-3xl lg:text-4xl">
              ❀
            </span>
          </div>

          {/* Recipient Information */}
          <div className="mb-8 sm:mb-10">
            <p className="text-indigo-700 font-bold text-lg sm:text-xl lg:text-2xl">
              John Doe
            </p>
            <p className="text-gray-700 text-sm sm:text-base">
              XYZ Corporation
            </p>
            <p className="text-gray-700 text-sm sm:text-base">
              123 Business Rd.
            </p>
            <p className="text-gray-700 text-sm sm:text-base">
              Business City, 45678
            </p>
          </div>

          {/* Body of the Letter */}
          <div className="mb-8">
            <p className="text-gray-800 leading-relaxed mb-4 font-serif text-base sm:text-lg">
              Dear Mr. Doe,
            </p>
            <p className="text-gray-800 leading-relaxed mb-4 text-base sm:text-lg">
              I hope this letter finds you in good health. I am writing to
              express my interest in the software development position at XYZ
              Corporation, which I came across through your website. With my
              experience in front-end development, particularly with React.js
              and modern web technologies, I believe I can contribute
              effectively to your team.
            </p>
            <p className="text-gray-800 leading-relaxed mb-4 text-base sm:text-lg">
              Over the past year, I have gained hands-on experience in building
              responsive, high-performance web applications. I am proficient in
              HTML, CSS, JavaScript, and React, and I am also skilled in working
              with Redux Toolkit, Tailwind CSS, and API integration. I am
              confident that my background, combined with my passion for
              continuous learning, makes me a suitable candidate for this role.
            </p>
            <p className="text-gray-800 leading-relaxed mb-4 text-base sm:text-lg">
              I would welcome the opportunity to discuss how my skills can align
              with the needs of XYZ Corporation. Please feel free to contact me
              at your convenience. Thank you for considering my application. I
              look forward to the possibility of contributing to your company.
            </p>
            <p className="text-gray-800 leading-relaxed font-serif text-base sm:text-lg">
              Sincerely,
              <br />
              Ahmed Salah Fadl
            </p>
          </div>

          {/* Decorative Flourish at the Bottom */}
          <div className="mt-12 text-center">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-serif text-indigo-600">
              ✿
            </div>
          </div>

          {/* Signature Section */}
          <div className="mt-6 text-right">
            <p className="italic text-gray-600 text-lg sm:text-xl lg:text-2xl">
              Ahmed Salah Fadl
            </p>
          </div>

          {/* Footer Border Divider */}
          <div className="border-t-2 border-gray-300 mt-8 relative">
            <span className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-indigo-600 text-2xl lg:text-3xl">
              ❀
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Letter;
