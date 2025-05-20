import { useState } from 'react';
import { X, Mail, Lock, Eye, EyeOff, User } from 'lucide-react';

export default function AuthModal({ showAuthModal, setShowAuthModal }) {
    const [activeTab, setActiveTab] = useState('login');
    const [showPassword, setShowPassword] = useState(false);

    if (!showAuthModal) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <div className="relative bg-white rounded-xl md:rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden transform transition-all">
                <button
                    onClick={() => setShowAuthModal(false)}
                    className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors"
                >
                    <X size={20} />
                </button>

                <div className="flex border-b border-gray-200">
                    <button
                        className={`flex-1 py-3 md:py-4 font-semibold text-xs md:text-sm transition-colors ${activeTab === 'login'
                            ? 'text-green-800 border-b-2 border-green-800'
                            : 'text-gray-500 hover:text-gray-700'
                            }`}
                        onClick={() => setActiveTab('login')}
                    >
                        Login
                    </button>
                    <button
                        className={`flex-1 py-3 md:py-4 font-semibold text-xs md:text-sm transition-colors ${activeTab === 'signup'
                            ? 'text-green-800 border-b-2 border-green-800'
                            : 'text-gray-500 hover:text-gray-700'
                            }`}
                        onClick={() => setActiveTab('signup')}
                    >
                        Sign Up
                    </button>
                </div>

                <div className={`p-4 md:p-6 ${activeTab === 'login' ? 'block' : 'hidden'}`}>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Welcome Back</h3>

                    <form className="space-y-3 md:space-y-4">
                        <div>
                            <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                                <input
                                    type="email"
                                    className="w-full pl-9 md:pl-10 pr-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm md:text-base"
                                    placeholder="Your email address"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="w-full pl-9 md:pl-10 pr-9 md:pr-10 py-2 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm md:text-base"
                                    placeholder="Your password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    type="checkbox"
                                    className="h-3 w-3 md:h-4 md:w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-xs md:text-sm text-gray-700">
                                    Remember me
                                </label>
                            </div>
                            <a href="#" className="text-xs md:text-sm font-medium text-green-700 hover:text-green-800">
                                Forgot password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-green-700 to-green-800 text-white py-2 md:py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 text-sm md:text-base"
                        >
                            Sign In
                        </button>
                    </form>

                    <div className="mt-4 md:mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-xs md:text-sm">
                                <span className="px-2 bg-white text-gray-500">Or continue with</span>
                            </div>
                        </div>

                        <div className="mt-4 grid grid-cols-2 gap-2 md:gap-3">
                            <button className="flex justify-center items-center py-1.5 md:py-2 px-2 md:px-4 border border-gray-300 rounded-md shadow-sm bg-white text-xs md:text-sm font-medium text-gray-700 hover:bg-gray-50">
                                Google
                            </button>
                            <button className="flex justify-center items-center py-1.5 md:py-2 px-2 md:px-4 border border-gray-300 rounded-md shadow-sm bg-white text-xs md:text-sm font-medium text-gray-700 hover:bg-gray-50">
                                Facebook
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`p-4 md:p-6 ${activeTab === 'signup' ? 'block' : 'hidden'}`}>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Create Account</h3>

                    <form className="space-y-3 md:space-y-4">
                        <div className="grid grid-cols-2 gap-2 md:gap-4">
                            <div>
                                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">First Name</label>
                                <input
                                    type="text"
                                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm md:text-base"
                                    placeholder="First name"
                                />
                            </div>
                            <div>
                                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                <input
                                    type="text"
                                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm md:text-base"
                                    placeholder="Last name"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                                <input
                                    type="email"
                                    className="w-full pl-9 md:pl-10 pr-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm md:text-base"
                                    placeholder="Your email address"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="w-full pl-9 md:pl-10 pr-9 md:pr-10 py-2 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm md:text-base"
                                    placeholder="Create a password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            </div>
                            <p className="mt-1 text-xs text-gray-500">Must be at least 8 characters with letters and numbers</p>
                        </div>

                        <div className="flex items-center">
                            <input
                                id="terms"
                                type="checkbox"
                                className="h-3 w-3 md:h-4 md:w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                            />
                            <label htmlFor="terms" className="ml-2 block text-xs md:text-sm text-gray-700">
                                I agree to the <a href="#" className="text-green-700 hover:text-green-800">Terms</a> and <a href="#" className="text-green-700 hover:text-green-800">Privacy</a>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-green-700 to-green-800 text-white py-2 md:py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 text-sm md:text-base"
                        >
                            Create Account
                        </button>
                    </form>

                    <div className="mt-4 md:mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-xs md:text-sm">
                                <span className="px-2 bg-white text-gray-500">Or sign up with</span>
                            </div>
                        </div>

                        <div className="mt-4 grid grid-cols-2 gap-2 md:gap-3">
                            <button className="flex justify-center items-center py-1.5 md:py-2 px-2 md:px-4 border border-gray-300 rounded-md shadow-sm bg-white text-xs md:text-sm font-medium text-gray-700 hover:bg-gray-50">
                                Google
                            </button>
                            <button className="flex justify-center items-center py-1.5 md:py-2 px-2 md:px-4 border border-gray-300 rounded-md shadow-sm bg-white text-xs md:text-sm font-medium text-gray-700 hover:bg-gray-50">
                                Facebook
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}