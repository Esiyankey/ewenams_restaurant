import { Instagram, Twitter, Facebook, Youtube } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#2c3a14] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h2 className="text-3xl font-bold">Food</h2>
            <h2 className="text-3xl font-bold mb-4">Zero.</h2>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <p className="mb-2">+1 (86) 852 346 000</p>
            <p className="mb-4">info@foodzero.com</p>
            <p className="mb-1">1959 Sepulveda Blvd,</p>
            <p>Culver City, CA, 90230</p>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-medium mb-4">Never Miss a Recipe</h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Email Address"
                className="bg-transparent border-white/70 text-white placeholder:text-white/70"
              />
              <Button className="bg-[#5e6f32] hover:bg-[#4a5826] text-white">Subscribe</Button>
            </div>
            <p className="text-xs mt-2 text-white/70">Join our subscribers and get best recipe delivered each week!</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-dashed border-white/30 mx-4"></div>

      {/* Copyright and Social */}
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-white/80 mb-4 sm:mb-0">© 2020 Zero Inc. All rights Reserved</p>
        <div className="flex space-x-4">
          <Link href="#" className="text-white hover:text-white/80">
            <Instagram size={20} />
          </Link>
          <Link href="#" className="text-white hover:text-white/80">
            <Twitter size={20} />
          </Link>
          <Link href="#" className="text-white hover:text-white/80">
            <Facebook size={20} />
          </Link>
          <Link href="#" className="text-white hover:text-white/80">
            <Youtube size={20} />
          </Link>
        </div>
      </div>
    </footer>
  )
}

