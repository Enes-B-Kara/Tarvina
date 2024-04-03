import Link from 'next/link';

const ApplicationCard = () => {
  return (
    <div className="max-w-full sm:max-w-md mx-auto mt-10">
      <div className="bg-white shadow-lg rounded-lg py-6 sm:py-10 px-4 sm:px-6 md:px-10">
        <div className="text-center">
        
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800">TARVİNA PAZARYERİ</h1>
          <p className="text-sm sm:text-md mt-4 text-gray-600">
            Ürünlerinizi Türkiye'nin 81 ilinde 35 milyondan fazla Tarvina müşterisine 7/24 açık online pazaryeri modeliyle satışa sunmak için hemen başvurun!
          </p>

          <Link href="/apply" passHref>
            <p className="mt-8 w-full inline-block">
              <button className="w-full py-2 sm:py-3 px-4 sm:px-6 bg-orange-500 text-white font-bold rounded-lg shadow-md hover:bg-orange-700 transition duration-300 ease-in-out">
                Pazar yerine Başvur
              </button>
            </p>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default ApplicationCard;
