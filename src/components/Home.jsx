import { useEffect, useState } from "react";
import ProductCategory from "./ProductCategory";
import ProductCard from "./ProductCard";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Home() {

    const [product, setProduct] = useState([]);
    const [productCategory, setProductCategory] = useState([]);
    const [viewProduct, setViewProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showCategory, setShowCategory] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const navigate = useNavigate();
    const { category, search, id } = useParams();

    // Get all products
    const getProduct = async () => {
        setLoading(true);
        navigate('/');
        setShowCategory(false);
        let res = await fetch('https://dummyjson.com/products');
        let data = await res.json();

        setProduct(data.products);
        setViewProduct(null);
        setLoading(false);
    };

    // Get categories
    const getProductCategory = async () => {
        setShowCategory(false);
        let res = await fetch('https://dummyjson.com/products/categories');
        let data = await res.json();

        setProductCategory(data);
    };

    // Filter by category
    const productFilter = async (value) => {

        setLoading(true);
        navigate(`/products/category/${value}`);
        setShowCategory(false);
        let res = await fetch(`https://dummyjson.com/products/category/${value}`);
        let data = await res.json();

        setProduct(data.products);
        setViewProduct(null);
        setShowCategory(false);

        setLoading(false);
    };

    // Search products
    const searchProduct = async (value) => {

        setLoading(true);
        navigate(`/products/search/${value}`);
        let res = await fetch(`https://dummyjson.com/products/search?q=${value}`);
        let data = await res.json();

        setProduct(data.products);
        setViewProduct(null);

        setLoading(false);
    };

    // Get single product
    const selectedProduct = async (productId) => {

        setLoading(true);
        navigate(`/products/${productId}`);
        let res = await fetch(`https://dummyjson.com/products/${productId}`);
        let data = await res.json();

        setViewProduct(data);

        setLoading(false);
    };

    // Search form
    const searchItem = async (e) => {

        e.preventDefault();

        if (!searchInput) {
            alert("Please input");
            return;
        }

        searchProduct(searchInput);
        setSearchInput("");
    };

    // Load categories once
    useEffect(() => {
        getProductCategory();
    }, []);

    // URL based logic
    useEffect(() => {

        if (category) {
            productFilter(category);
        }

        else if (search) {
            searchProduct(search);
        }

        else if (id) {
            selectedProduct(id);
        }

        else {
            getProduct();
        }

    }, [category, search, id]);

    const items = product.map((details) => (
        <ProductCard
            key={details.id}
            selectedProduct={selectedProduct}
            details={details}
        />
    ));

    return (
        <div>

            {/* header */}

            <Header searchItem={searchItem} searchInput={searchInput} setSearchInput={setSearchInput} />

            {/* Loader */}

            {loading && (
                <div className="flex justify-center items-center h-screen">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif"
                        className="w-20"
                        alt="Loading"
                    />
                </div>
            )}

            {/* Category Sidebar */}

            {showCategory && (
                <div className="fixed top-16 left-0 w-full h-full bg-black/40 z-40">

                    <div className="w-90 h-full bg-white p-4 overflow-y-auto">

                        <ProductCategory
                            productCategory={productCategory}
                            productFilter={productFilter}
                            getProduct={getProduct}
                            setShowCategory={setShowCategory}
                        />

                    </div>

                </div>
            )}

            {/* Main Content */}

            {!loading && (

                <div className='pt-2'>

                    <button
                        onClick={() => setShowCategory(!showCategory)}
                        className="bg-black text-white px-4 py-2 rounded mx-8"
                    >
                        Categories
                    </button>

                    {(product == '') ? <h2 className="text-3xl text-center font-bold">Product Not Found</h2> : ''}

                    {/* Single Product View */}

                    {viewProduct && (

                        <div className="border rounded-xl shadow-md p-4 flex flex-col md:flex-row gap-4 bg-white m-2">

                            <div className="md:w-1/3 w-full">

                                <img
                                    src={viewProduct.thumbnail}
                                    alt={viewProduct.title}
                                    className="w-full rounded-lg"
                                />

                            </div>

                            <div className="md:w-2/3 flex flex-col gap-2">

                                <h2 className="text-3xl font-semibold">
                                    {viewProduct.title}
                                </h2>

                                <p>{viewProduct.description}</p>

                                <div className="flex gap-4">

                                    <span className="text-xl font-bold text-green-600">
                                        ${viewProduct.price}
                                    </span>

                                    <span className="text-red-500">
                                        {viewProduct.discountPercentage}% OFF
                                    </span>

                                </div>

                            </div>

                        </div>

                    )}

                    {/* Product Grid */}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-2">

                        {items}

                    </div>

                </div>

            )}
            {/* footer */}
            <Footer/>

        </div>
    );
}