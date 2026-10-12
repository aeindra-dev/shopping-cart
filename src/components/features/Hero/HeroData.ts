import type { HeroProps } from "./HeroTypes";

export const HeroData: HeroProps[] = [
    {
        id: "banner-1",
        title: "Sneakers That Move With You, Comfortable, Durable, And Always In Style.",
        cta: { label: "Find Your Fit", href: "/shop?filter=fit", variant: "dark" },
        img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1920",
        align: "bottom-left",
    },
    {
        id: "banner-2",
        title: "Fresh Drops. Iconic Silhouettes. Sneakers That Speak Before You Do.",
        cta: { label: "Get Your Pair", href: "/new", variant: "dark" },
        img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=1920",
        align: "bottom-left",
    },
    {
        id: "banner-3",
        title: "STYLE-STACK",
        cta: { label: "Shop Sneakers", href: "/shop", variant: "light" },
        img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1920",
        align: "center",
    },
]