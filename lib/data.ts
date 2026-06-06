export const MARKETPLACE_DATA = {
  "plans": [
    {
      "features": ["✓ Member Management", "✓ Attendance Tracking", "✓ Payment Tracking", "✓ WhatsApp Reminders", "✓ Biometric Integration"],
      "durationMonths": 2,
      "code": "gym-starter",
      "price": 0,
      "name": "Gym Starter",
      "currency": "INR",
      "id": 1,
      "products": [1]
    },
    {
      "features": ["✓ Member Management", "✓ Attendance & Shift Tracking", "✓ Automated Billing & Invoices", "✓ WhatsApp Alerts", "✓ Biometric Sync"],
      "durationMonths": 12,
      "code": "gym-annual",
      "price": 9999,
      "name": "Gym Annual",
      "currency": "INR",
      "id": 2,
      "products": [1]
    },
    {
      "features": ["✓ Member Directory", "✓ Class Scheduling", "✓ Trainer Allocation", "✓ Attendance Logs"],
      "durationMonths": 2,
      "code": "yoga-starter",
      "price": 0,
      "name": "Yoga Starter",
      "currency": "INR",
      "id": 3,
      "products": [2]
    },
    {
      "features": ["✓ Unlimited Classes", "✓ Trainer Dashboard", "✓ Auto-renewing Subscriptions", "✓ WhatsApp Reminders"],
      "durationMonths": 12,
      "code": "yoga-annual",
      "price": 9999,
      "name": "Yoga Annual",
      "currency": "INR",
      "id": 4,
      "products": [2]
    },
    {
      "features": ["✓ Slot Booking", "✓ Ground Scheduling", "✓ Booking Notifications", "✓ Offline Payments"],
      "durationMonths": 2,
      "code": "turf-starter",
      "price": 0,
      "name": "Turf Starter",
      "currency": "INR",
      "id": 5,
      "products": [3]
    },
    {
      "features": ["✓ Online Payments Integration", "✓ Advanced Slot Management", "✓ Customer CRM", "✓ Automated Revenue Analytics"],
      "durationMonths": 12,
      "code": "turf-annual",
      "price": 9999,
      "name": "Turf Annual",
      "currency": "INR",
      "id": 6,
      "products": [3]
    },
    {
      "features": ["✓ Student Profiles", "✓ Basic Fee Tracking", "✓ Teacher Attendance", "✓ Notification Panel"],
      "durationMonths": 2,
      "code": "school-starter",
      "price": 0,
      "name": "School Starter",
      "currency": "INR",
      "id": 7,
      "products": [4]
    },
    {
      "features": ["✓ Complete Student/Staff ERP", "✓ Online Fees Collection", "✓ Report Card Generator", "✓ Parent App Integration"],
      "durationMonths": 12,
      "code": "school-annual",
      "price": 14999,
      "name": "School Annual",
      "currency": "INR",
      "id": 8,
      "products": [4]
    },
    {
      "features": ["✓ Student Profiles", "✓ Batch Scheduling", "✓ Attendance Tracker", "✓ Basic Billing"],
      "durationMonths": 2,
      "code": "dance-starter",
      "price": 0,
      "name": "Dance Starter",
      "currency": "INR",
      "id": 9,
      "products": [5]
    },
    {
      "features": ["✓ Choreographer Dashboards", "✓ Event & Performance Planner", "✓ Subscription & Fees Tracking", "✓ WhatsApp Notifications"],
      "durationMonths": 12,
      "code": "dance-annual",
      "price": 9999,
      "name": "Dance Annual",
      "currency": "INR",
      "id": 10,
      "products": [5]
    },
    {
      "features": ["✓ Custom Storefront", "✓ Basic Inventory", "✓ Order Tracking", "✓ Email Alerts"],
      "durationMonths": 2,
      "code": "ecom-starter",
      "price": 0,
      "name": "Ecom Starter",
      "currency": "INR",
      "id": 11,
      "products": [6]
    },
    {
      "features": ["✓ High-speed Custom Storefront", "✓ Advanced ERP & Inventory", "✓ Customer Subscriptions", "✓ GST Billing & Analytics"],
      "durationMonths": 12,
      "code": "ecom-annual",
      "price": 11999,
      "name": "Ecom Annual",
      "currency": "INR",
      "id": 12,
      "products": [6]
    }
  ],
  "products": [
    {
      "name": "Gym Management ERP",
      "description": "Full-suite SaaS platform to manage gym members, automated subscription billing, attendance, and biometric access control.",
      "id": 1,
      "slug": "gym-management-system"
    },
    {
      "name": "Yoga Studio Manager",
      "description": "Streamline your yoga sessions with unified class scheduling, trainer assignments, and automated membership renewals.",
      "id": 2,
      "slug": "yoga-studio-management"
    },
    {
      "name": "Turf Booking Arena",
      "description": "Complete ground scheduling, hourly slot booking management, and player subscription system for sports venues.",
      "id": 3,
      "slug": "turf-booking-system"
    },
    {
      "name": "School Management ERP",
      "description": "Enterprise-grade ERP for academic administration, fee collections, attendance, report cards, and communication.",
      "id": 4,
      "slug": "school-management-system"
    },
    {
      "name": "Dance Studio Academy",
      "description": "Efficient batch scheduling, student attendance logs, choreographer directories, and fee alerts for dance academies.",
      "id": 5,
      "slug": "dance-studio-management"
    },
    {
      "name": "Ecommerce ERP & Store",
      "description": "Customizable high-performance online storefront combined with advanced inventory, order processing, and subscription ERP.",
      "id": 6,
      "slug": "ecommerce-erp-system"
    }
  ]
};

export function getProducts() {
  return MARKETPLACE_DATA.products;
}

export function getPlansByProductId(productId: number) {
  return MARKETPLACE_DATA.plans.filter(plan => plan.products.includes(productId));
}

export function getAllPlans() {
  return MARKETPLACE_DATA.plans;
}

export function getProductBySlug(slug: string) {
  return MARKETPLACE_DATA.products.find(p => p.slug === slug);
}

