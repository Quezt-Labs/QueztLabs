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
import { SectionHeader } from '@/components/ui/section-header';
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

/**
 * Pricing section with comparison table
 */
export function Pricing() {
	return (
		<section id="pricing" className="py-20 lg:py-32 bg-muted/50 relative overflow-hidden">
			{/* Background pattern */}
			<div
				className={cn(
					'absolute inset-0 z-0 size-full max-h-full opacity-30',
					'[mask-image:radial-gradient(ellipse_at_center,var(--background),transparent)]',
				)}
				style={{
					backgroundImage:
						'radial-gradient(var(--foreground) 1px, transparent 1px)',
					backgroundSize: '32px 32px',
				}}
			/>
			
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<SectionHeader
					badge="Pricing"
					title="Simple, transparent pricing that scales with you"
					description="Start small, grow big. From MVPs to enterprise solutions, we have a plan that fits your budget and ambitions. No hidden fees, no surprises—just honest pricing."
				/>

				<div className="mt-16 overflow-hidden">
					<PricingTable className="mx-auto max-w-5xl w-full">
						<PricingTableHeader>
							<PricingTableRow>
								<th />
								{pricingTiers.map((tier) => {
									const Icon = planIcons[tier.id as keyof typeof planIcons];
									const priceDisplay = tier.price === 'Custom' 
										? 'Custom' 
										: `$${tier.price}`;
									
									return (
										<th key={tier.id} className="p-2 align-top w-[280px]">
											<PricingTablePlan
												name={tier.name}
												badge={tier.description}
												price={priceDisplay}
												icon={Icon}
												className={cn(
													tier.highlighted && 
													"border-primary/50 shadow-md ring-2 ring-primary/20 bg-primary/5"
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
			</div>
		</section>
	);
}
