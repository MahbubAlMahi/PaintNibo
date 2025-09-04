export default function Footer() {
  return (
    <footer className="mt-10 border-t border-gray-200 bg-white/70 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        <div>
          <h4 className="font-bold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><a className="hover:text-purple-600" href="#">About</a></li>
            <li><a className="hover:text-purple-600" href="#">Contact</a></li>
            <li><a className="hover:text-purple-600" href="#">Terms</a></li>
            <li><a className="hover:text-purple-600" href="#">Privacy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Categories</h4>
          <ul className="space-y-1">
            <li>Home decor</li>
            <li>Showpiece</li>
            <li>Furniture</li>
            <li>Paints</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Support</h4>
          <ul className="space-y-1">
            <li><a className="hover:text-purple-600" href="#">Help Center</a></li>
            <li><a className="hover:text-purple-600" href="#">Shipping</a></li>
            <li><a className="hover:text-purple-600" href="#">Returns</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Newsletter</h4>
          <p className="text-gray-600">Get style tips & offers.</p>
          <div className="mt-2 flex gap-2">
            <input className="input flex-1" placeholder="Your email" />
            <button className="btn-primary">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 pb-6">
        © {new Date().getFullYear()} PaintNibo. All rights reserved.
      </div>
    </footer>
  )
}
