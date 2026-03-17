import { useQuery } from "@tanstack/react-query";
import { MOCK_PRODUCTS, Product } from "../lib/mock-data";

// Simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export interface ProductFilters {
  category?: string[];
  brand?: string[];
  minPrice?: number;
  maxPrice?: number;
  age?: string[];
  abv?: string[];
  flavourCamp?: string[];
  bottler?: string[];
  search?: string;
  sortBy?: string;
}

export function useProducts(filters?: ProductFilters) {
  return useQuery({
    queryKey: ['products', filters],
    queryFn: async () => {
      await delay(600); // 600ms artificial delay

      let filtered = [...MOCK_PRODUCTS];

      if (filters) {
        if (filters.search) {
          const q = filters.search.toLowerCase();
          filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(q) || 
            p.brand.toLowerCase().includes(q)
          );
        }
        if (filters.category?.length) {
          filtered = filtered.filter(p => filters.category!.includes(p.category));
        }
        if (filters.brand?.length) {
          filtered = filtered.filter(p => filters.brand!.includes(p.brand));
        }
        if (filters.minPrice !== undefined) {
          filtered = filtered.filter(p => p.price >= filters.minPrice!);
        }
        if (filters.maxPrice !== undefined) {
          filtered = filtered.filter(p => p.price <= filters.maxPrice!);
        }
        if (filters.age?.length) {
          filtered = filtered.filter(p => filters.age!.includes(p.age));
        }
        if (filters.flavourCamp?.length) {
          filtered = filtered.filter(p => filters.flavourCamp!.includes(p.flavourCamp));
        }
        if (filters.bottler?.length) {
          filtered = filtered.filter(p => filters.bottler!.includes(p.bottler));
        }

        if (filters.sortBy) {
          switch (filters.sortBy) {
            case 'price_asc':
              filtered.sort((a, b) => a.price - b.price);
              break;
            case 'price_desc':
              filtered.sort((a, b) => b.price - a.price);
              break;
            case 'rating':
              filtered.sort((a, b) => b.rating - a.rating);
              break;
            case 'popular':
            default:
              filtered.sort((a, b) => b.reviews - a.reviews);
              break;
          }
        }
      }

      return filtered;
    }
  });
}

export function useProduct(id: string) {
  return useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      await delay(400);
      const product = MOCK_PRODUCTS.find(p => p.id === id);
      if (!product) throw new Error("Product not found");
      return product;
    },
    enabled: !!id
  });
}
