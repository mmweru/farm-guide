import { Leaf } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-green-900 text-green-100 py-8 md:py-12">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8">
                    <div className="flex items-center mb-4 md:mb-0">
                        <Leaf className="text-yellow-400 mr-2 h-5 w-5" />
                        <h3 className="text-lg md:text-xl font-bold text-white">ARDHI<span className="text-yellow-400">GRO</span></h3>
                    </div>

                    <div className="flex space-x-3 md:space-x-4 flex-wrap justify-center">
                        {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social, index) => (
                            <a key={index} href="#" className="hover:text-yellow-400 transition-colors text-sm md:text-base">
                                {social}
                            </a>
                        ))}
                    </div>
                </div>

                <hr className="border-green-800 mb-6 md:mb-8" />

                <div className="text-center text-green-200 text-xs md:text-sm">
                    <p>© {new Date().getFullYear()} ARDHIGRO. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}