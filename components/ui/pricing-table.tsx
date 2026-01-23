"use client";
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { CheckIcon, LucideIcon, MinusIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function PricingTable({ className, ...props }: React.ComponentProps<"table">) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isScrolledToEnd, setIsScrolledToEnd] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const checkScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10; // 10px threshold

      setIsScrolledToEnd(isAtEnd);
    };

    checkScroll();
    container.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      container.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  return (
    <div className="relative w-full">
      <div
        ref={scrollContainerRef}
        data-slot="table-container"
        className="relative w-full overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide"
      >
        <table
          className={cn("w-full text-sm min-w-[600px]", className)}
          {...props}
        />
      </div>

      {/* Fade gradient - right side when not scrolled, left side when scrolled */}
      <AnimatePresence mode="wait">
        {!isScrolledToEnd ? (
          <motion.div
            key="right-fade"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none sm:hidden z-10"
          />
        ) : (
          <motion.div
            key="left-fade"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none sm:hidden z-10"
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function PricingTableHeader({ ...props }: React.ComponentProps<"thead">) {
  return <thead data-slot="table-header" {...props} />;
}

function PricingTableBody({
  className,
  ...props
}: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr]:divide-x [&_tr]:border-b", className)}
      {...props}
    />
  );
}

function PricingTableRow({ ...props }: React.ComponentProps<"tr">) {
  return <tr data-slot="table-row" {...props} />;
}

function PricingTableCell({
  className,
  children,
  ...props
}: React.ComponentProps<"td"> & { children: boolean | string }) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-4 align-middle whitespace-nowrap min-w-[120px]",
        className,
      )}
      {...props}
    >
      {children === true ? (
        <CheckIcon aria-hidden="true" className="size-4 text-primary" />
      ) : children === false ? (
        <MinusIcon
          aria-hidden="true"
          className="text-muted-foreground size-4"
        />
      ) : (
        children
      )}
    </td>
  );
}

function PricingTableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "p-2 text-left align-middle font-medium whitespace-nowrap min-w-[120px]",
        className,
      )}
      {...props}
    />
  );
}

function PricingTablePlan({
  name,
  badge,
  price,
  compareAt,
  icon: Icon,
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & PricingPlanType) {
  return (
    <div
      className={cn(
        "bg-background supports-[backdrop-filter]:bg-background/40 relative h-full overflow-hidden rounded-xl border p-6 font-normal backdrop-blur-xs w-full shadow-sm",
        className,
      )}
      {...props}
    >
      {/* Icon and Name */}
      <div className="flex items-start gap-3 mb-4">
        <div className="flex items-center justify-center rounded-lg border bg-muted/50 p-2 shrink-0">
          {Icon && <Icon className="h-4 w-4 text-primary" />}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-foreground mb-2">{name}</h3>
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
            {badge}
          </p>
        </div>
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-foreground">{price}</span>
          {compareAt && (
            <span className="text-muted-foreground text-sm line-through">
              {compareAt}
            </span>
          )}
        </div>
      </div>

      {/* CTA Button */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

type PricingPlanType = {
  name: string;
  icon: LucideIcon;
  badge: string;
  price: string;
  compareAt?: string;
};

type FeatureValue = boolean | string;

type FeatureItem = {
  label: string;
  values: FeatureValue[];
};

export {
  type PricingPlanType,
  type FeatureValue,
  type FeatureItem,
  PricingTable,
  PricingTableHeader,
  PricingTableBody,
  PricingTableRow,
  PricingTableHead,
  PricingTableCell,
  PricingTablePlan,
};
