"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Rocket, Zap, Building2 } from 'lucide-react';
import {
	type FeatureItem,
	PricingTable,
	PricingTableBody,
	PricingTableHeader,
	PricingTableHead,
	PricingTableRow,
	PricingTableCell,
	PricingTablePlan,
} from '@/components/ui/pricing-table';
import { Button } from '@/components/ui/button';
import { pricingTiers } from '@/lib/data';
import Link from 'next/link';

// Convert pricingTiers to table format
const FEATURES: FeatureItem[] = [
	{
		label: 'Platforms',
		values: ['One platform (iOS, Android, or Web)', 'All platforms (iOS, Android & Web)', 'All platforms + Custom'],
	},
	{
		label: 'Screens',
		values: ['Up to 10 screens', 'Unlimited screens', 'Unlimited + Custom'],
	},
	{
		label: 'Design Quality',
		values: ['Professional UI/UX', 'Premium design with interactions', 'Enterprise-grade design'],
	},
	{
		label: 'Revisions',
		values: ['2 rounds', 'Unlimited revisions', 'Unlimited + Priority'],
	},
	{
		label: 'API Integrations',
		values: [false, 'Custom integrations', 'Advanced integrations'],
	},
	{
		label: 'Post-launch Support',
		values: ['30 days', '90 days', '24/7 priority support'],
	},
	{
		label: 'Analytics & Monitoring',
		values: [false, true, 'Advanced analytics + SLA'],
	},
	{
		label: 'Team Access',
		values: ['Direct team access', 'Dedicated support', 'Dedicated team'],
	},
	{
		label: 'Infrastructure',
		values: ['Standard', 'Scalable', 'Custom architecture'],
	},
	{
		label: 'Documentation',
		values: ['Basic', 'Comprehensive', 'Comprehensive + Training'],
	},
	{
		label: 'Consultation',
		values: [true, true, true],
	},
	{
		label: 'Project Roadmap',
		values: [true, true, true],
	},
];

const planIcons = {
	starter: Zap,
	growth: Rocket,
	enterprise: Building2,
};

export default function PricingTableDemo() {
	return (
		<div className="relative min-h-screen overflow-hidden px-4 py-20">
			<div
				className={cn(
					'absolute inset-0 z-[-10] size-full max-h-102 opacity-50',
					'[mask-image:radial-gradient(ellipse_at_center,var(--background),transparent)]',
				)}
				style={{
					backgroundImage:
						'radial-gradient(var(--foreground) 1px, transparent 1px)',
					backgroundSize: '32px 32px',
				}}
			/>
			<div className="relative mx-auto flex max-w-4xl flex-col items-center text-center mb-12">
				<h1
					className={cn(
						'text-3xl leading-tight font-bold text-balance sm:text-5xl',
					)}
				>
					Simple, transparent pricing
					<br />
					<span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
						that scales with you
					</span>
				</h1>
				<p className="text-muted-foreground mt-4 max-w-2xl text-pretty">
					Start small, grow big. From MVPs to enterprise solutions, we have a plan that fits your budget and ambitions.
				</p>
			</div>
			<PricingTable className="mx-auto my-5 max-w-5xl">
				<PricingTableHeader>
					<PricingTableRow>
						<th />
						{pricingTiers.map((tier, index) => {
							const Icon = planIcons[tier.id as keyof typeof planIcons];
							const priceDisplay = tier.price === 'Custom' 
								? 'Custom' 
								: `$${tier.price}`;
							const compareAt = tier.priceNote === 'Starting from' 
								? undefined 
								: undefined; // Add compareAt if needed
							
							return (
								<th key={tier.id} className="p-1">
									<PricingTablePlan
										name={tier.name}
										badge={tier.description}
										price={priceDisplay}
										compareAt={compareAt}
										icon={Icon}
										className={cn(
											tier.highlighted && 
											"after:pointer-events-none after:absolute after:-inset-0.5 after:rounded-[inherit] after:bg-gradient-to-b after:from-primary/15 after:to-transparent after:blur-[2px] border-primary/50"
										)}
									>
										<Button
											asChild
											variant={tier.highlighted ? "default" : "outline"}
											className={cn(
												"w-full rounded-lg",
												tier.highlighted && "bg-primary text-primary-foreground hover:bg-primary/90"
											)}
											size="lg"
										>
											<Link href="#contact">{tier.cta}</Link>
										</Button>
									</PricingTablePlan>
								</th>
							);
						})}
					</PricingTableRow>
				</PricingTableHeader>
				<PricingTableBody>
					{FEATURES.map((feature, index) => (
						<PricingTableRow key={index}>
							<PricingTableHead>{feature.label}</PricingTableHead>
							{feature.values.map((value, idx) => (
								<PricingTableCell key={idx}>{value}</PricingTableCell>
							))}
						</PricingTableRow>
					))}
				</PricingTableBody>
			</PricingTable>
		</div>
	);
}
