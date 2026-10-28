import { Link } from "react-router";
const Error = ({ message }) => {
    if (message) {
        return (
            <div
                role="alert"
                className="mx-auto max-w-lg rounded-xl border border-red-200 bg-red-50 px-6 py-10 text-center"
            >
                <h2 className="text-lg font-semibold text-red-800">
                    Couldn&apos;t load photos
                </h2>
                <p className="mt-2 text-sm text-red-700">{message}</p>
                <p className="mt-1 text-sm text-red-600">
                    Refresh the page to try again.
                </p>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 text-center">
            <h1 className="text-6xl font-bold text-indigo-600">404</h1>

            <h2 className="mt-4 text-2xl font-semibold text-gray-800">
                Page Not Found
            </h2>

            <p className="mt-2 text-gray-500">
                Sorry, the page you are looking for does not exist.
            </p>
            <Link to="/"><button className="mt-6 rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
                Go Back Home
            </button></Link>
            
        </div>
    );
};

export default Error;
