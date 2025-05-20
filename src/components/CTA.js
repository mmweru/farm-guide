export default function CTA({ setShowAuthModal }) {
    return (
        <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden bg-gradient-to-r from-green-800 to-green-900 shadow-2xl">
                <div className="absolute top-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-yellow-400 rounded-full opacity-10 transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 md:w-60 md:h-60 bg-green-400 rounded-full opacity-10 transform translate-x-1/4 translate-y-1/4"></div>

                <div className="relative p-6 md:p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-6 md:mb-0 md:mr-8">
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4">Ready to transform your farming?</h3>
                        <p className="text-green-100 max-w-lg text-sm md:text-base">
                            Join thousands of forward-thinking farmers who are already using our platform to improve yields and sustainability.
                        </p>
                    </div>

                    <button
                        onClick={() => setShowAuthModal(true)}
                        className="flex-shrink-0 bg-gradient-to-r from-yellow-400 to-yellow-500 text-green-900 px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold hover:shadow-lg hover:shadow-yellow-400/20 transform hover:-translate-y-1 transition-all duration-300 text-sm md:text-base"
                    >
                        Start Free Trial
                    </button>
                </div>
            </div>
        </div>
    );
}