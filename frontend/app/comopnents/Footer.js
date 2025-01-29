export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-6 mt-8">
            <div className="container mx-auto text-center">
                <p className="text-sm">© {new Date().getFullYear()} Belzir. All rights reserved.</p>
                <div className="mt-4">
                    <a href="/privacy" className="text-gray-400 hover:text-white text-sm mx-2">Privacy Policy</a>
                    <a href="/terms" className="text-gray-400 hover:text-white text-sm mx-2">Terms of Service</a>
                    <a href="/contact" className="text-gray-400 hover:text-white text-sm mx-2">Contact Us</a>
                </div>
            </div>
        </footer>
    );
}
