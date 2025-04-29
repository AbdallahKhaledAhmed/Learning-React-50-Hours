import { useEffect, useState } from "react";
import Product from "./Product";
import { useAtom } from "jotai";
import Sort from "./Sort";
import {
  categoryAtom,
  maxPriceAtom,
  minPriceAtom,
  searchAtom,
  sortAtom,
} from "../state/atoms";

const API_URL = "https://dummyjson.com/products/?limit=0";
const itemsPerPage = 15;
export type ProductType = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  images: [string];
  thumbnail: string;
};

const Products = () => {
  const [products, setProducts] = useState<ProductType[] | null>(null);
  const [page, setPage] = useState<number>(1);
  const [sort] = useAtom<string>(sortAtom);
  const [search] = useAtom(searchAtom);
  const [minPrice] = useAtom(minPriceAtom);
  const [maxPrice] = useAtom(maxPriceAtom);
  const [category] = useAtom(categoryAtom);
  const [loading, setLoading] = useState<boolean>(false);

  const filteredItems = products
    ? products.filter((item) => {
        return (
          item.price >= minPrice &&
          item.price <= maxPrice &&
          item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) &&
          item.category
            .toLocaleLowerCase()
            .startsWith(category.toLocaleLowerCase())
        );
      })
    : null;
  const itemsToShow = filteredItems
    ? filteredItems.slice((page - 1) * itemsPerPage, page * itemsPerPage)
    : null;
  const lastPageNum = filteredItems
    ? Math.ceil(filteredItems!.length / itemsPerPage)
    : 0;

  function showItems() {
    if (loading) {
      return (
        <div className="flex flex-wrap gap-5">
          {Array.from({ length: itemsPerPage }).map((_, index) => (
            <div
              key={index}
              className="rounded border w-45 h-65 p-3 flex flex-col justify-between animate-pulse"
            >
              <div className="w-40 h-40 bg-neutral-100 mx-auto"></div>
              <div className="h-6 bg-neutral-100 mt-2"></div>
              <div className="h-4 bg-neutral-100 mt-1"></div>
            </div>
          ))}
        </div>
      );
    }

    if (Array.isArray(itemsToShow)) {
      return (
        <div className="flex flex-col w-full">
          <div className="flex flex-wrap gap-5">
            {itemsToShow!
              .sort((a, b) => {
                switch (sort) {
                  case "Cheap":
                    return a.price - b.price;
                  case "Expensive":
                    return b.price - a.price;
                  case "Popular":
                    return b.rating - a.rating;
                  default:
                    return 0;
                }
              })
              .map((item, ind) => (
                <Product
                  title={item.title}
                  imgurl={item.thumbnail}
                  price={item.price}
                  productid={item.id}
                  key={ind}
                />
              ))}
          </div>
          <div className="w-full flex justify-center items-center gap-5 mt-5">
            <button
              className="page-nav"
              disabled={page - 1 === 0}
              onClick={() => {
                setPage((prev) => prev - 1);
              }}
            >
              &lt; Prev
            </button>
            {(() => {
              let start = Math.max(1, page - 2);
              let end = Math.min(lastPageNum, page + 2);
              if (end - start < 4) {
                if (start === 1) {
                  end = Math.min(lastPageNum, start + 4);
                } else if (end === lastPageNum) {
                  start = Math.max(1, lastPageNum - 4);
                }
              }
              return Array.from(
                { length: end - start + 1 },
                (_, i) => start + i
              ).map((num) => (
                <button
                  className={page === num ? "selected-page" : "page-num"}
                  onClick={() => {
                    setPage(num);
                  }}
                >
                  {num}
                </button>
              ));
            })()}
            <button
              className="page-nav"
              disabled={page + 1 > lastPageNum}
              onClick={() => {
                setPage((prev) => prev + 1);
              }}
            >
              Next &gt;
            </button>
          </div>
        </div>
      );
    }
    return <p>No Data to Show</p>;
  }

  useEffect(() => {
    setLoading(true); // Start loading
    fetch(API_URL)
      .then((res) => {
        res.json().then((data) => {
          setProducts(data.products);
          setLoading(false); // Stop loading
        });
      })
      .catch((error) => {
        console.error("Can't fetch Products URL: ", error);
        setProducts(null);
        setLoading(false); // Stop loading
      });
  }, [page]); // Re-fetch when the page changes

  return (
    <div className="w-full flex flex-col py-10 pl-10 ">
      <Sort />
      <div className="flex flex-wrap justify-center gap-5 mt-5">
        {showItems()}
      </div>
    </div>
  );
};

export default Products;
