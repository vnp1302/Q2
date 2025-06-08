import Image from "next/image"

export default function Marketplace() {
  return (
    <div className="marketplace-container">
      <div className="marketplace-header">
        <h1>بازار Q2</h1>
        <p>بهترین محصولات و خدمات را کشف کنید</p>

        <div className="search-bar">
          <input type="text" placeholder="جستجو در بازار..." />
          <button type="submit">جستجو</button>
        </div>
      </div>

      <div className="filters">
        <div className="filter-group">
          <label>دسته‌بندی:</label>
          <select>
            <option>همه</option>
            <option>نرم‌افزار</option>
            <option>طراحی</option>
            <option>آموزش</option>
          </select>
        </div>
        <div className="filter-group">
          <label>قیمت:</label>
          <select>
            <option>همه</option>
            <option>رایگان</option>
            <option>کمتر از $50</option>
            <option>$50-$200</option>
          </select>
        </div>
      </div>

      <div className="products-grid">
        <div className="product-card">
          <div className="product-image">
            <Image src="/placeholder.svg" alt="محصول 1" width={300} height={200} />
          </div>
          <div className="product-info">
            <h3>ابزار طراحی حرفه‌ای</h3>
            <p>ابزاری قدرتمند برای طراحان گرافیک</p>
            <div className="product-price">$99</div>
            <button className="btn-primary">خرید</button>
          </div>
        </div>

        <div className="product-card">
          <div className="product-image">
            <Image src="/placeholder.svg" alt="محصول 2" width={300} height={200} />
          </div>
          <div className="product-info">
            <h3>دوره آموزش برنامه‌نویسی</h3>
            <p>یادگیری کامل JavaScript و React</p>
            <div className="product-price">$149</div>
            <button className="btn-primary">خرید</button>
          </div>
        </div>

        <div className="product-card">
          <div className="product-image">
            <Image src="/placeholder.svg" alt="محصول 3" width={300} height={200} />
          </div>
          <div className="product-info">
            <h3>قالب وب‌سایت</h3>
            <p>قالب آماده و واکنش‌گرا</p>
            <div className="product-price">$29</div>
            <button className="btn-primary">خرید</button>
          </div>
        </div>

        <div className="product-card">
          <div className="product-image">
            <Image src="/placeholder.svg" alt="محصول 4" width={300} height={200} />
          </div>
          <div className="product-info">
            <h3>پلاگین وردپرس</h3>
            <p>افزونه قدرتمند برای وردپرس</p>
            <div className="product-price">رایگان</div>
            <button className="btn-primary">دانلود</button>
          </div>
        </div>
      </div>
    </div>
  )
}
