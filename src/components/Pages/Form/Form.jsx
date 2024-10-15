import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addUserData } from "../../../Redux/Templateslice";
import { useNavigate } from "react-router-dom";

export default function Form() {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedTemplate } = useSelector((state) => state.templatered);
  async function handlelogin(values) {
    try {
      let response = await dispatch(addUserData(values)).unwrap();
      console.log(response);
      if (response.id !== null) {
        navigate("/preview");
      }
    } catch (error) {
      console.log(error);
    }

    console.log(values);
  }

  let formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      phone: "",
    },
    onSubmit: (values) => {
      handlelogin(values);
    },
  });

  return (
    <div className="container mx-auto">
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
              {selectedTemplate}
            </h1>
            <form className="space-y-4" onSubmit={formik.handleSubmit}>
              {/* firstName */}
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your first name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="First Name"
                />
                {formik.errors.firstName && formik.touched.firstName && (
                  <span className="text-red-500 text-sm">
                    {formik.errors.firstName}
                  </span>
                )}
              </div>

              {/* lastName */}
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Last Name"
                />
                {formik.errors.lastName && formik.touched.lastName && (
                  <span className="text-red-500 text-sm">
                    {formik.errors.lastName}
                  </span>
                )}
              </div>

              {/* age */}
              <div>
                <label
                  htmlFor="age"
                  className="block text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your age
                </label>
                <input
                  type="number"
                  name="age"
                  id="age"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.age}
                  className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Age"
                />
                {formik.errors.age && formik.touched.age && (
                  <span className="text-red-500 text-sm">
                    {formik.errors.age}
                  </span>
                )}
              </div>

              {/* email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Email Address"
                />
                {formik.errors.email && formik.touched.email && (
                  <span className="text-red-500 text-sm">
                    {formik.errors.email}
                  </span>
                )}
              </div>

              {/* phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                  className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Phone Number"
                />
                {formik.errors.phone && formik.touched.phone && (
                  <span className="text-red-500 text-sm">
                    {formik.errors.phone}
                  </span>
                )}
              </div>

              {/* submit button */}
              <button
                type="submit"
                className="w-full py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
