import Modal from "../../Model/Model";

export default function BusinessCard({ data }) {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div
          className="
            bg-gradient-to-tr from-purple-500 to-pink-500 
            text-white max-w-sm md:max-w-md lg:max-w-lg 
            mx-auto p-8 rounded-3xl shadow-xl transform 
            transition-transform duration-500 hover:scale-105
            hover:shadow-2xl
          "
        >
          {/* User Info Section */}
          <div className="flex flex-col items-center">
            <div
              className="
                w-24 h-24 rounded-full bg-white 
                text-purple-500 flex items-center justify-center 
                text-4xl font-bold mb-4 shadow-lg
                border-4 border-purple-500
              "
            >
              {data?.firstName.charAt(0)}
            </div>
            <h2
              className="
                text-3xl font-extrabold 
                text-white mb-1
              "
            >
              {data?.firstName} <span>{data?.lastName}</span>
            </h2>
            <p className="text-lg opacity-75">Age: {data?.age}</p>
          </div>

          {/* Contact Info */}
          <div className="mt-6 text-center">
            <p className="text-lg">
              <span className="font-semibold">Email: </span>
              {data?.email}
            </p>
            <p className="text-lg mt-2">
              <span className="font-semibold">Phone: </span>
              {data?.phone}
            </p>
          </div>

          {/* Modal */}
        </div>
      </div>
      <Modal id={data?.id} />
    </>
  );
}
