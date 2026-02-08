<!-- Main Dashboard Client List -->
<!DOCTYPE html>
<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Dashboard Floating Search V2</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#197fe6",
                        "background-light": "#ffffff",
                        "background-dark": "#111921",
                    },
                    fontFamily: {
                        "sans": ["Poppins", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "12px",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        body {
            min-height: 100dvh;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark font-sans text-[#0e141b] dark:text-slate-100">
<div class="relative flex min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto shadow-2xl bg-white dark:bg-background-dark">
<div class="sticky top-0 z-50 px-4 py-4 bg-white dark:bg-background-dark">
<div class="relative flex items-center h-12 w-full bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700">
<button class="pl-4 pr-3 text-[#0e141b] dark:text-white flex items-center justify-center">
<span class="material-symbols-outlined text-[24px]">menu</span>
</button>
<input class="w-full bg-transparent border-none focus:ring-0 text-[15px] placeholder:text-slate-500 font-medium" placeholder="Search contacts"/>
<button class="pr-4 pl-3 text-slate-600 dark:text-slate-300 flex items-center justify-center">
<span class="material-symbols-outlined text-[22px]">mic</span>
</button>
</div>
</div>
<section class="mt-2">
<div class="flex items-center justify-between px-4 pb-3">
<h2 class="text-[18px] font-bold leading-tight">Today’s Follow-Up</h2>
<span class="text-primary text-xs font-semibold">View All</span>
</div>
<div class="flex overflow-x-auto hide-scrollbar px-4 gap-4 pb-4">
<div class="flex-shrink-0 w-[160px] bg-white dark:bg-slate-800 p-3 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
<div class="w-full h-[120px] bg-slate-100 dark:bg-slate-700 rounded-lg mb-3 overflow-hidden">
<img class="w-full h-full object-cover" data-alt="Portrait of John Doe client" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYCu_QJGIN0JgyfjY69cR2DqzFrvp_RBtX5rnqei34tAEVytwWeVn9OiLhbln7Y3m-hRmL9sXfzAe9O7LROhI5-sH28u24uoR4Tj8JObhPcxvaUDghqysHKkY9hVdwsors88m8xvt1QdKb2e1JKIghPT_mznCYi9lM7ipidXtS37I0V_kKLgBdUmR-iwQABZREjcho7uZxlfeDKco5z8KnGrcDbls-9kLI7yslIP9Q_XQiJfn1M7XrvZRvUv8lmd8qhlVWnYBR3azk"/>
</div>
<p class="text-[14px] font-bold truncate">John Doe</p>
<p class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Today at 10:30 AM</p>
<div class="mt-3 inline-flex items-center px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-[9px] font-bold uppercase tracking-wider">
                    Pending
                </div>
</div>
<div class="flex-shrink-0 w-[160px] bg-white dark:bg-slate-800 p-3 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
<div class="w-full h-[120px] bg-slate-100 dark:bg-slate-700 rounded-lg mb-3 overflow-hidden">
<img class="w-full h-full object-cover" data-alt="Portrait of Sarah Smith client" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmETcNjzGDxbqSV9gFULPboBX-pJIwxrEBS_FGRIYbElDCs5qM3i7l1S3em0xtNOsHfImned1mHXFIBzgz1dQtcEPYtuMc-E3kDj5TxVm-6xyZHY7W_Q8gy09Ksh84yDT6__yM8UTylpATD4rOxqVCTMtvfbg2kCM6OacdaDcwJw8NacY1pqPWDCUEjNy2KBchOAxcfVXRO1DAW6b7n1dAArljIWyBVMwKVgpGYsyeNJbj8gcaytH1hBi8OCDhlwQAbGsTiMVjJKwz"/>
</div>
<p class="text-[14px] font-bold truncate">Sarah Smith</p>
<p class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Tomorrow at 2:00 PM</p>
<div class="mt-3 inline-flex items-center px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[9px] font-bold uppercase tracking-wider">
                    Confirmed
                </div>
</div>
<div class="flex-shrink-0 w-[160px] bg-white dark:bg-slate-800 p-3 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
<div class="w-full h-[120px] bg-slate-100 dark:bg-slate-700 rounded-lg mb-3 overflow-hidden">
<img class="w-full h-full object-cover" data-alt="Portrait of Michael Brown client" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcijVQtoBHYqkuaLax2CneUCyKyg3m9IVSh5_NaTMpLdc5FUU3tvKJAs6rxyl3NQE7R2HmyG5VDFc-QPM0w6fgXwzKjlXgV8jJsCYnRvdkT_UirVBg8GrAXRlcZfiVKF1jd88uf-IUCchVz3hAG7N79jLo3p7LQ3_U4iBqVKtPseiylZVUjyGiIjt0DfaOqcfDtb-5pP0_btsvSaHcBBJ72mELZ4X4Z82m-UucoLr7hMT5m5FTfcYNIWgcyudtn_v9kJQFvRp30W9m"/>
</div>
<p class="text-[14px] font-bold truncate">Michael Brown</p>
<p class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Today at 4:45 PM</p>
<div class="mt-3 inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[9px] font-bold uppercase tracking-wider">
                    High Priority
                </div>
</div>
</div>
</section>
<section class="flex-1 px-4 pt-4 pb-12">
<div class="flex items-center justify-between mb-4">
<h2 class="text-[18px] font-bold leading-tight">Client Listing</h2>
<button class="text-slate-500 dark:text-slate-400 flex items-center gap-1 text-sm font-medium">
<span class="material-symbols-outlined text-lg">filter_list</span>
<span>Filter</span>
</button>
</div>
<div class="space-y-3">
<div class="flex items-start gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
<div class="size-12 rounded-full bg-slate-100 dark:bg-slate-700 flex-shrink-0 overflow-hidden">
<img class="w-full h-full object-cover" data-alt="Robert Fox client avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXpqKNqZU3rEHYlq4iHksMk6rVWrNMpLBkZsXq6rW-apdcIBJ_LMFUM4ANdfBVXqe_GourdTtbGaGCUTOr1foMGpW1SrEwgEbR7reXTtoZJwiZos9hq9bN_af6OE4GsIvmmhdVVehBswf4KzJ6bhoY9c-7cwq9xgmJ_j331-0nW_mYFW2et4zc2Mtd0VcJUBm3eqBELnoXrymOm_jet0UOM9m6J5Wy9IaDjrj3DQ3yukYhxr1ouugr4SvIxADLliq0Ii9Q67HVM9g1"/>
</div>
<div class="flex-1 min-w-0">
<div class="flex items-start justify-between">
<h3 class="font-bold text-[#0e141b] dark:text-white truncate">Robert Fox</h3>
<div class="flex flex-col items-end gap-1 flex-shrink-0">
<span class="text-[9px] font-bold uppercase tracking-wide text-primary bg-primary/10 px-2 py-0.5 rounded">Hot Lead</span>
<span class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Today at 10:30 AM</span>
</div>
</div>
<p class="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">+1 234 567 890</p>
<div class="flex items-center gap-1 mt-1">
<span class="material-symbols-outlined text-[14px] text-slate-400">location_on</span>
<span class="text-[11px] text-slate-400">New York</span>
</div>
</div>
</div>
<div class="flex items-start gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
<div class="size-12 rounded-full bg-slate-100 dark:bg-slate-700 flex-shrink-0 overflow-hidden">
<img class="w-full h-full object-cover" data-alt="Jane Cooper client avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtZi8Wxwf_0GNvXkhL1sPvrobfJG2FQDMquemsehbNoOt2tstiJ2oM1s2ajMVIpHqdSbxfPpf_gzgEXPuOcOoINK7QUdNTB3DolaQ4-Aj1bEsgxEwjLtQMvPQwhvUkRRlKix3KkG7T5Wu7zhzJmepkl7aPYGCYDnWsRVo0QuCE_bz86WtNaMXIjreWwD4TQeciZ5h4hvBTUsMcPNZgPoT8B9GU4BzrycAlSC2ShRlKxue1UTVOsjrCon5VTYRxHdGLdg8M_rmuhAsc"/>
</div>
<div class="flex-1 min-w-0">
<div class="flex items-start justify-between">
<h3 class="font-bold text-[#0e141b] dark:text-white truncate">Jane Cooper</h3>
<div class="flex flex-col items-end gap-1 flex-shrink-0">
<span class="text-[9px] font-bold uppercase tracking-wide text-amber-600 bg-amber-50 px-2 py-0.5 rounded">Viewing</span>
<span class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Tomorrow at 2:00 PM</span>
</div>
</div>
<p class="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">+1 987 654 321</p>
<div class="flex items-center gap-1 mt-1">
<span class="material-symbols-outlined text-[14px] text-slate-400">location_on</span>
<span class="text-[11px] text-slate-400">Los Angeles</span>
</div>
</div>
</div>
<div class="flex items-start gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
<div class="size-12 rounded-full bg-slate-100 dark:bg-slate-700 flex-shrink-0 overflow-hidden">
<img class="w-full h-full object-cover" data-alt="Cody Fisher client avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAas96lzFzEcQwetYbCtQ6rJPh2jM-37pmmXByatcA3zw9j0p2eWMaE7GKaD9w7mFo3f6WNUqtZcbq1_GPhdO3gY1v1HwnnCb3MRefII2rx-27Ed7XSy-SW24n0JnDDb0RGCYFp_DxRaS5cgsVhyuepDX-lcPXFoH9Xm400jnogTf6gm2nlhuRm7gz-jsu9ihDPtIWMOOD4j3kgazW348XpsonJ5ep0V9g29SSLN13ZfZ09FsZgY03AMRZLOl1idmOrw2q5N_gYoNMa"/>
</div>
<div class="flex-1 min-w-0">
<div class="flex items-start justify-between">
<h3 class="font-bold text-[#0e141b] dark:text-white truncate">Cody Fisher</h3>
<div class="flex flex-col items-end gap-1 flex-shrink-0">
<span class="text-[9px] font-bold uppercase tracking-wide text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Closed</span>
<span class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Yesterday</span>
</div>
</div>
<p class="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">+1 555 012 345</p>
<div class="flex items-center gap-1 mt-1">
<span class="material-symbols-outlined text-[14px] text-slate-400">location_on</span>
<span class="text-[11px] text-slate-400">Chicago</span>
</div>
</div>
</div>
<div class="flex items-start gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
<div class="size-12 rounded-full bg-slate-100 dark:bg-slate-700 flex-shrink-0 overflow-hidden">
<img class="w-full h-full object-cover" data-alt="Esther Howard client avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP5JY1LoI_AXtMfAmgzw5T5_RHkhVKlwd3KufCWxzEv6u6ov9KCvpFE36QGwU4wfKSGBA9FPjGfofd6eMVLyY0iffQ1_8LuFptbCi1zeWmCrGE5A319ekhoskMQmXKh7-QCqaHFuTulQgertBqmoQ4dYTfi-MjhVN71ql55v8KA2b2tgseseGmYmeMvnwI5kthDGB_gEcyN2IqsHdIj4cRRHdawW6H-LP40aIlTy1KSjoZeiusS7F7iOMSmGmKzYXu-zc_TdOH577y"/>
</div>
<div class="flex-1 min-w-0">
<div class="flex items-start justify-between">
<h3 class="font-bold text-[#0e141b] dark:text-white truncate">Esther Howard</h3>
<div class="flex flex-col items-end gap-1 flex-shrink-0">
<span class="text-[9px] font-bold uppercase tracking-wide text-slate-500 bg-slate-100 px-2 py-0.5 rounded">New Lead</span>
<span class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Today at 4:15 PM</span>
</div>
</div>
<p class="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">+1 333 444 555</p>
<div class="flex items-center gap-1 mt-1">
<span class="material-symbols-outlined text-[14px] text-slate-400">location_on</span>
<span class="text-[11px] text-slate-400">Miami</span>
</div>
</div>
</div>
<div class="flex items-start gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
<div class="size-12 rounded-full bg-slate-100 dark:bg-slate-700 flex-shrink-0 overflow-hidden">
<div class="w-full h-full flex items-center justify-center bg-primary/20 text-primary font-bold">BK</div>
</div>
<div class="flex-1 min-w-0">
<div class="flex items-start justify-between">
<h3 class="font-bold text-[#0e141b] dark:text-white truncate">Bessie Cooper</h3>
<div class="flex flex-col items-end gap-1 flex-shrink-0">
<span class="text-[9px] font-bold uppercase tracking-wide text-amber-600 bg-amber-50 px-2 py-0.5 rounded">Pending Visit</span>
<span class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Mon at 11:00 AM</span>
</div>
</div>
<p class="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">+1 222 888 777</p>
<div class="flex items-center gap-1 mt-1">
<span class="material-symbols-outlined text-[14px] text-slate-400">location_on</span>
<span class="text-[11px] text-slate-400">San Francisco</span>
</div>
</div>
</div>
</div>
</section>
</div>

</body></html>

<!-- Client Details Popup -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Client Details Popup</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#197fe6",
                        "background-light": "#f6f7f8",
                        "background-dark": "#111921",
                    },
                    fontFamily: {
                        "display": ["Inter"]
                    },
                    borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>.material-symbols-outlined {
    font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24
    }
.ios-blur {
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px)
    }
/* Custom select icon for TextField component */
.custom-select {
    background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuB07MVCUdUVEnk1l-Xt-U5asJQvmfrKbjYitMW28PRipjhbWPthpTyR0zTo5RZXZYRl7KhCFrL0R6hJUH23Aurq_nwoqkKrrACFxpoHuSOb9KntAN2YDyC1RRbw_Vl-m3K_OXpRlYIBmdwFfoauofLUJ5yRs0RfCobHSROtw89AoY_7MxN9GMznSNnInRBO3ycNetEr0pt3BjDndsqTkV0t4nmKFd_e8dLnLMDXOVWSVAKwyh_YLEckB03MCIR1TjKcnfzbWyx2IOb3);
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 1.5rem;
    appearance: none
    }</style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-slate-900 font-display">
<!-- Background Mockup (Simulating a dashboard behind the popup) -->
<div class="fixed inset-0 bg-black/40 z-0">
<div class="p-4 opacity-30 pointer-events-none">
<div class="h-8 w-32 bg-white/20 rounded-lg mb-4"></div>
<div class="grid grid-cols-2 gap-4">
<div class="h-32 bg-white/10 rounded-xl"></div>
<div class="h-32 bg-white/10 rounded-xl"></div>
</div>
</div>
</div>
<!-- Bottom Sheet Container -->
<div class="fixed inset-x-0 bottom-0 z-50 flex flex-col max-h-[92%] bg-white dark:bg-background-dark rounded-t-3xl shadow-2xl overflow-hidden">
<!-- BottomSheetHandle -->
<div class="flex flex-col items-center pt-3 pb-1">
<div class="h-1.5 w-10 rounded-full bg-slate-200 dark:bg-slate-700"></div>
</div>
<!-- Scrollable Content Area -->
<div class="flex-1 overflow-y-auto pb-32">
<!-- HeadlineText & Status -->
<div class="flex flex-col px-4 pt-4">
<div class="flex justify-between items-start">
<h1 class="text-[#0e141b] dark:text-white tracking-tight text-[28px] font-bold leading-tight">Jonathan Smith</h1>
<span class="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Active</span>
</div>
<p class="text-[#4e7397] dark:text-slate-400 text-base">High-intent buyer</p>
</div>
<!-- TextField (Status Dropdown) -->
<div class="px-4 py-4">
<label class="flex flex-col w-full">
<p class="text-[#0e141b] dark:text-slate-200 text-sm font-semibold leading-normal pb-2 uppercase tracking-wide">Lead Status</p>
<select class="custom-select flex w-full rounded-xl text-[#0e141b] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-[#d0dbe7] dark:border-slate-700 bg-slate-50 dark:bg-slate-800 h-14 p-[15px] text-base font-medium">
<option value="warm">Warm Prospect</option>
<option value="hot">Hot Lead</option>
<option value="closed">Closed Deal</option>
<option value="lost">Lost</option>
</select>
</label>
</div>
<div class="px-4 py-2">
<div class="h-px bg-slate-100 dark:bg-slate-800 w-full"></div>
</div>
<!-- Contact List Items -->
<div class="flex items-center gap-4 bg-transparent px-4 min-h-[72px] py-2 justify-between">
<div class="flex items-center gap-4">
<div class="text-primary flex items-center justify-center rounded-xl bg-primary/10 shrink-0 size-12">
<span class="material-symbols-outlined">call</span>
</div>
<div class="flex flex-col justify-center">
<p class="text-[#4e7397] dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">Phone Number</p>
<p class="text-primary text-lg font-semibold leading-normal line-clamp-1">+1 (555) 012-3456</p>
</div>
</div>
<div class="shrink-0">
<div class="text-[#4e7397] flex size-7 items-center justify-center">
<span class="material-symbols-outlined">chevron_right</span>
</div>
</div>
</div>
<div class="flex items-center gap-4 bg-transparent px-4 min-h-[72px] py-2">
<div class="text-primary flex items-center justify-center rounded-xl bg-primary/10 shrink-0 size-12">
<span class="material-symbols-outlined">location_on</span>
</div>
<div class="flex flex-col justify-center">
<p class="text-[#4e7397] dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">Location</p>
<p class="text-[#0e141b] dark:text-white text-base font-medium leading-normal line-clamp-2">Austin, TX</p>
</div>
</div>
<div class="flex items-center gap-4 bg-transparent px-4 min-h-[72px] py-2">
<div class="text-primary flex items-center justify-center rounded-xl bg-primary/10 shrink-0 size-12">
<span class="material-symbols-outlined">work</span>
</div>
<div class="flex flex-col justify-center">
<p class="text-[#4e7397] dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">Profession</p>
<p class="text-[#0e141b] dark:text-white text-base font-medium leading-normal line-clamp-2">Senior Software Architect</p>
</div>
</div>
<!-- Notes Section -->
<div class="px-4 py-4">
<div class="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 border border-slate-100 dark:border-slate-800">
<div class="flex items-center gap-2 mb-2">
<span class="material-symbols-outlined text-primary text-sm">event_note</span>
<p class="text-[#0e141b] dark:text-white text-sm font-bold uppercase tracking-wide">Recent Notes</p>
</div>
<p class="text-[#4e7397] dark:text-slate-300 text-sm leading-relaxed">
                        Looking for a 3-bedroom modern farmhouse in East Austin. Prefers high ceilings and a large backyard for their dog. Budgeting around $850k.
                    </p>
</div>
</div>
<!-- Follow-up Section -->
<div class="px-4 py-2">
<div class="flex items-center justify-between bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-xl p-4">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary">calendar_today</span>
<div>
<p class="text-[#4e7397] dark:text-slate-400 text-xs font-medium uppercase">Next Follow-up</p>
<p class="text-[#0e141b] dark:text-white font-bold">Oct 24, 2023 • 10:00 AM</p>
</div>
</div>
<button class="text-primary text-sm font-bold">Edit</button>
</div>
</div>
<!-- Hidden space to prevent content clipping behind fixed bar -->
<div class="h-10"></div>
</div>
<!-- Fixed Action Bar -->
<div class="absolute bottom-0 left-0 right-0 bg-white/90 dark:bg-background-dark/90 ios-blur border-t border-slate-100 dark:border-slate-800 px-6 pb-8 pt-4">
<div class="flex justify-between items-center max-w-md mx-auto">
<button class="flex flex-col items-center gap-1 group">
<div class="size-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/25 group-active:scale-95 transition-transform">
<span class="material-symbols-outlined text-[24px]">call</span>
</div>
<span class="text-xs font-bold text-[#4e7397] dark:text-slate-400">Call</span>
</button>
<button class="flex flex-col items-center gap-1 group">
<div class="size-12 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg shadow-[#25D366]/25 group-active:scale-95 transition-transform">
<span class="material-symbols-outlined text-[24px] fill-1">chat</span>
</div>
<span class="text-xs font-bold text-[#4e7397] dark:text-slate-400">WhatsApp</span>
</button>
<button class="flex flex-col items-center gap-1 group">
<div class="size-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/25 group-active:scale-95 transition-transform">
<span class="material-symbols-outlined text-[24px]">sms</span>
</div>
<span class="text-xs font-bold text-[#4e7397] dark:text-slate-400">SMS</span>
</button>
<button class="flex flex-col items-center gap-1 group">
<div class="size-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/25 group-active:scale-95 transition-transform">
<span class="material-symbols-outlined text-[24px]">mail</span>
</div>
<span class="text-xs font-bold text-[#4e7397] dark:text-slate-400">Email</span>
</button>
</div>
</div>
</div>
</body></html>

<!-- App Settings and Profile -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>App Settings and Profile</title>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Theme Configuration -->
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#197fe6",
                        "background-light": "#f6f7f8",
                        "background-dark": "#111921",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark font-display min-h-screen">
<div class="relative flex h-auto min-h-screen w-full flex-col max-w-[430px] mx-auto overflow-x-hidden border-x border-gray-100 dark:border-gray-800 shadow-sm">
<!-- TopAppBar -->
<div class="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10 backdrop-blur-md bg-opacity-80">
<div aria-label="Go back" class="text-[#0e141b] dark:text-white flex size-12 shrink-0 items-center cursor-pointer">
<span class="material-symbols-outlined text-2xl">arrow_back_ios</span>
</div>
<h2 class="text-[#0e141b] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Settings</h2>
</div>
<div class="flex flex-col gap-2">
<!-- ProfileHeader -->
<div class="flex p-4 @container">
<div class="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between @[520px]:items-center bg-white dark:bg-gray-800/40 p-5 rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-sm">
<div class="flex gap-4 items-center">
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-20 w-20 border-2 border-primary/20" data-alt="Professional headshot of a female real estate agent" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCN24gh_Du0uykXYpW6Xll_KY7v-httHYE9_mjdF0LPdP3rj5fNaWls0zJpZpnj20kI_F2yFwCCA-QQ84MZzrbYWVXEXRPYSvq7ffkuf0wKmEF3c5F6NBqLsdyg7BKtUxEmnj1PDzwKeeJAbdZ2GJf_AK-rstKcxNbKUZAumgdgOssGtA0PUX0SgiAFCof34bYcrjaeIBHLDxUvFvk_LNB9pFAimQD46UmTHsK1Z06t-AGn7fX3qKE3FI0K2uIODVGCLTg0O2oHJAoZ");'>
</div>
<div class="flex flex-col justify-center">
<p class="text-[#0e141b] dark:text-white text-[20px] font-bold leading-tight tracking-[-0.015em]">Jane Cooper</p>
<p class="text-[#4e7397] dark:text-gray-400 text-sm font-normal leading-normal">Senior Real Estate Agent</p>
<p class="text-[#4e7397] dark:text-gray-400 text-sm font-normal leading-normal">+1 (555) 000-0000</p>
</div>
</div>
</div>
</div>
<!-- Preferences Section -->
<h3 class="text-[#0e141b] dark:text-gray-300 text-sm font-semibold uppercase tracking-wider px-4 pb-2 pt-4">Preferences</h3>
<div class="flex flex-col mx-4 bg-white dark:bg-gray-800/40 rounded-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
<!-- Theme Mode Toggle (Modified ListItem) -->
<div class="flex items-center gap-4 px-4 min-h-14 justify-between border-b border-gray-100 dark:border-gray-700/50">
<div class="flex items-center gap-4">
<div class="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-10">
<span class="material-symbols-outlined">dark_mode</span>
</div>
<p class="text-[#0e141b] dark:text-white text-base font-medium leading-normal flex-1 truncate">Dark Mode</p>
</div>
<div class="shrink-0">
<label class="relative flex h-[28px] w-[48px] cursor-pointer items-center rounded-full border-none bg-gray-200 dark:bg-gray-700 p-0.5 has-[:checked]:justify-end has-[:checked]:bg-primary transition-colors">
<div class="h-full w-[24px] rounded-full bg-white shadow-md"></div>
<input checked="" class="invisible absolute" type="checkbox"/>
</label>
</div>
</div>
<!-- Notifications (ListItem) -->
<div class="flex items-center gap-4 px-4 min-h-14 justify-between border-b border-gray-100 dark:border-gray-700/50">
<div class="flex items-center gap-4">
<div class="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-10">
<span class="material-symbols-outlined">notifications</span>
</div>
<p class="text-[#0e141b] dark:text-white text-base font-medium leading-normal flex-1 truncate">Notifications</p>
</div>
<div class="shrink-0">
<div class="text-gray-400 flex size-7 items-center justify-center">
<span class="material-symbols-outlined">chevron_right</span>
</div>
</div>
</div>
<!-- Privacy -->
<div class="flex items-center gap-4 px-4 min-h-14 justify-between">
<div class="flex items-center gap-4">
<div class="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-10">
<span class="material-symbols-outlined">lock</span>
</div>
<p class="text-[#0e141b] dark:text-white text-base font-medium leading-normal flex-1 truncate">Privacy &amp; Security</p>
</div>
<div class="shrink-0">
<div class="text-gray-400 flex size-7 items-center justify-center">
<span class="material-symbols-outlined">chevron_right</span>
</div>
</div>
</div>
</div>
<!-- About Section -->
<h3 class="text-[#0e141b] dark:text-gray-300 text-sm font-semibold uppercase tracking-wider px-4 pb-2 pt-6">System</h3>
<div class="flex flex-col mx-4 bg-white dark:bg-gray-800/40 rounded-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
<!-- App Version (Informational ListItem) -->
<div class="flex items-center gap-4 px-4 min-h-14 justify-between border-b border-gray-100 dark:border-gray-700/50">
<div class="flex items-center gap-4">
<div class="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-10">
<span class="material-symbols-outlined">info</span>
</div>
<p class="text-[#0e141b] dark:text-white text-base font-medium leading-normal flex-1 truncate">App Version</p>
</div>
<div class="shrink-0">
<p class="text-gray-500 dark:text-gray-400 text-sm font-normal">v2.4.0</p>
</div>
</div>
<!-- Help Support -->
<div class="flex items-center gap-4 px-4 min-h-14 justify-between">
<div class="flex items-center gap-4">
<div class="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-10">
<span class="material-symbols-outlined">help</span>
</div>
<p class="text-[#0e141b] dark:text-white text-base font-medium leading-normal flex-1 truncate">Help &amp; Support</p>
</div>
<div class="shrink-0">
<div class="text-gray-400 flex size-7 items-center justify-center">
<span class="material-symbols-outlined">chevron_right</span>
</div>
</div>
</div>
</div>
<!-- Logout Section -->
<div class="px-4 pt-10 pb-8 mt-auto">
<button class="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl border-2 border-red-500/30 text-red-500 font-bold text-base hover:bg-red-50 dark:hover:bg-red-950/20 transition-all active:scale-[0.98]">
<span class="material-symbols-outlined">logout</span>
                    Log Out
                </button>
<p class="text-center text-gray-400 dark:text-gray-500 text-xs mt-6">
                    © 2024 RealEstate CRM Pro. All rights reserved.
                </p>
</div>
</div>
</div>
</body></html>

<!-- Main Dashboard Client List -->
<!DOCTYPE html>
<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Desktop CRM Dashboard Overview</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#197fe6",
                        "background-light": "#f8fafc",
                        "background-dark": "#0f172a",
                    },
                    fontFamily: {
                        "sans": ["Poppins", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.375rem",
                        "lg": "0.5rem",
                        "xl": "12px",
                        "2xl": "16px",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
<style type="text/tailwindcss">
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        body {
            @apply bg-background-light text-slate-900;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="min-h-screen flex">
<aside class="w-64 border-r border-slate-200 bg-white flex flex-col fixed h-full z-20">
<div class="p-6 border-b border-slate-50">
<div class="flex items-center gap-2 text-primary">
<span class="material-symbols-outlined text-3xl font-bold">real_estate_agent</span>
<span class="font-bold text-xl tracking-tight text-slate-800">SkyCRM</span>
</div>
</div>
<nav class="flex-1 p-4 space-y-1">
<a class="flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary rounded-xl font-medium" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span>Home</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-xl transition-colors" href="#">
<span class="material-symbols-outlined">person_add</span>
<span>Entry</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-xl transition-colors" href="#">
<span class="material-symbols-outlined">insights</span>
<span>Overview</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-xl transition-colors" href="#">
<span class="material-symbols-outlined">smart_toy</span>
<span>AI Assistant</span>
</a>
<div class="pt-4 mt-4 border-t border-slate-100">
<a class="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-xl transition-colors" href="#">
<span class="material-symbols-outlined">settings</span>
<span>Settings</span>
</a>
</div>
</nav>
<div class="p-4">
<div class="bg-slate-50 rounded-2xl p-4">
<p class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Support</p>
<button class="w-full bg-white border border-slate-200 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                    Help Center
                </button>
</div>
</div>
</aside>
<main class="flex-1 ml-64 flex flex-col min-h-screen">
<header class="h-20 bg-white border-b border-slate-200 sticky top-0 z-10 px-8 flex items-center justify-between">
<div class="flex-1 max-w-2xl">
<div class="relative group">
<span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">search</span>
<input class="w-full bg-slate-50 border-none rounded-xl py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Search by name, contact, city or property tag..." type="text"/>
</div>
</div>
<div class="flex items-center gap-6 ml-8">
<button class="relative p-2 text-slate-400 hover:bg-slate-50 rounded-full transition-colors">
<span class="material-symbols-outlined">notifications</span>
<span class="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white"></span>
</button>
<div class="flex items-center gap-3 pl-6 border-l border-slate-200">
<div class="text-right">
<p class="text-sm font-bold text-slate-900">Alex Thompson</p>
<p class="text-xs text-slate-500">Senior Agent</p>
</div>
<div class="size-10 rounded-full overflow-hidden border border-slate-200 shadow-sm">
<img alt="Alex Thompson profile picture" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDa5TthctutrBstejat63L5a2chubkzu-xKk0coNxEIS7whUS2-pBtW98kUOEpDl6YfRNER0dY_Dxg1ktsd8_ayb1JjY7PJAZkL9PmzYV97h9EXAYPCVMx1bIL92R_uqaBP2FZGPYR_I3uBSYYCxFg4zlIwr7Sxih49fcXnm33v4MQW9ZIdeH0PJwAia3DtbJTRVrXcjOTFRnVrNcxg2sdQQ29xHQGnC5SE4DAiY6sxpD848mr7HxphJrbbCxqFpHtE4NmFXeBAKvk"/>
</div>
</div>
</div>
</header>
<div class="p-8 max-w-7xl mx-auto w-full space-y-8">
<div>
<h1 class="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
<p class="text-slate-500 text-sm mt-1">Welcome back, Alex. Here is what's happening today.</p>
</div>
<section>
<div class="flex items-center justify-between mb-4">
<h2 class="text-lg font-bold flex items-center gap-2">
                        Today’s Follow-Up
                        <span class="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded-full uppercase">3 Tasks</span>
</h2>
<button class="text-primary text-sm font-semibold hover:underline">View Calendar</button>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
<div class="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
<div class="flex gap-4 mb-4">
<div class="size-14 rounded-xl overflow-hidden flex-shrink-0">
<img alt="John Doe" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYCu_QJGIN0JgyfjY69cR2DqzFrvp_RBtX5rnqei34tAEVytwWeVn9OiLhbln7Y3m-hRmL9sXfzAe9O7LROhI5-sH28u24uoR4Tj8JObhPcxvaUDghqysHKkY9hVdwsors88m8xvt1QdKb2e1JKIghPT_mznCYi9lM7ipidXtS37I0V_kKLgBdUmR-iwQABZREjcho7uZxlfeDKco5z8KnGrcDbls-9kLI7yslIP9Q_XQiJfn1M7XrvZRvUv8lmd8qhlVWnYBR3azk"/>
</div>
<div class="min-w-0">
<h3 class="font-bold text-slate-900 truncate">John Doe</h3>
<p class="text-xs text-slate-500">Call regarding property A</p>
</div>
</div>
<div class="flex items-center gap-2 text-xs font-medium text-slate-600 mb-4 bg-slate-50 p-2 rounded-lg">
<span class="material-symbols-outlined text-sm">schedule</span>
<span>10:30 AM Today</span>
</div>
<div class="flex gap-2">
<button class="flex-1 py-2 bg-primary text-white text-xs font-bold rounded-lg hover:bg-blue-600 transition-colors">Call Now</button>
<button class="px-2 py-2 border border-slate-200 rounded-lg text-slate-400 hover:bg-slate-50">
<span class="material-symbols-outlined text-lg">more_horiz</span>
</button>
</div>
</div>
<div class="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div class="flex gap-4 mb-4">
<div class="size-14 rounded-xl overflow-hidden flex-shrink-0">
<img alt="Sarah Smith" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmETcNjzGDxbqSV9gFULPboBX-pJIwxrEBS_FGRIYbElDCs5qM3i7l1S3em0xtNOsHfImned1mHXFIBzgz1dQtcEPYtuMc-E3kDj5TxVm-6xyZHY7W_Q8gy09Ksh84yDT6__yM8UTylpATD4rOxqVCTMtvfbg2kCM6OacdaDcwJw8NacY1pqPWDCUEjNy2KBchOAxcfVXRO1DAW6b7n1dAArljIWyBVMwKVgpGYsyeNJbj8gcaytH1hBi8OCDhlwQAbGsTiMVjJKwz"/>
</div>
<div class="min-w-0">
<h3 class="font-bold text-slate-900 truncate">Sarah Smith</h3>
<p class="text-xs text-slate-500">Site visit: Downtown Loft</p>
</div>
</div>
<div class="flex items-center gap-2 text-xs font-medium text-slate-600 mb-4 bg-slate-50 p-2 rounded-lg">
<span class="material-symbols-outlined text-sm">event</span>
<span>2:00 PM Today</span>
</div>
<div class="flex gap-2">
<button class="flex-1 py-2 bg-primary text-white text-xs font-bold rounded-lg hover:bg-blue-600 transition-colors">Prepare</button>
<button class="px-2 py-2 border border-slate-200 rounded-lg text-slate-400 hover:bg-slate-50">
<span class="material-symbols-outlined text-lg">more_horiz</span>
</button>
</div>
</div>
<div class="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div class="flex gap-4 mb-4">
<div class="size-14 rounded-xl overflow-hidden flex-shrink-0">
<img alt="Michael Brown" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcijVQtoBHYqkuaLax2CneUCyKyg3m9IVSh5_NaTMpLdc5FUU3tvKJAs6rxyl3NQE7R2HmyG5VDFc-QPM0w6fgXwzKjlXgV8jJsCYnRvdkT_UirVBg8GrAXRlcZfiVKF1jd88uf-IUCchVz3hAG7N79jLo3p7LQ3_U4iBqVKtPseiylZVUjyGiIjt0DfaOqcfDtb-5pP0_btsvSaHcBBJ72mELZ4X4Z82m-UucoLr7hMT5m5FTfcYNIWgcyudtn_v9kJQFvRp30W9m"/>
</div>
<div class="min-w-0">
<h3 class="font-bold text-slate-900 truncate">Michael Brown</h3>
<p class="text-xs text-slate-500">Follow up on mortgage</p>
</div>
</div>
<div class="flex items-center gap-2 text-xs font-medium text-slate-600 mb-4 bg-slate-50 p-2 rounded-lg">
<span class="material-symbols-outlined text-sm">mail</span>
<span>4:45 PM Today</span>
</div>
<div class="flex gap-2">
<button class="flex-1 py-2 bg-primary text-white text-xs font-bold rounded-lg hover:bg-blue-600 transition-colors">Email</button>
<button class="px-2 py-2 border border-slate-200 rounded-lg text-slate-400 hover:bg-slate-50">
<span class="material-symbols-outlined text-lg">more_horiz</span>
</button>
</div>
</div>
</div>
</section>
<section class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
<div class="p-6 border-b border-slate-50 flex items-center justify-between">
<div>
<h2 class="text-lg font-bold text-slate-900">Client Listing</h2>
<p class="text-xs text-slate-400 mt-1">Manage and track your client pipeline</p>
</div>
<div class="flex items-center gap-3">
<button class="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100">
<span class="material-symbols-outlined text-lg">filter_list</span>
                            Filter
                        </button>
<button class="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-blue-600">
<span class="material-symbols-outlined text-lg">person_add</span>
                            Add Client
                        </button>
</div>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left">
<thead class="bg-slate-50/50">
<tr>
<th class="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Client Name</th>
<th class="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Contact Details</th>
<th class="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Location</th>
<th class="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
<th class="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Next Follow-Up</th>
<th class="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody class="divide-y divide-slate-50">
<tr class="hover:bg-slate-50/50 transition-colors group">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="size-10 rounded-full overflow-hidden flex-shrink-0 border border-slate-100">
<img alt="Robert Fox" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXpqKNqZU3rEHYlq4iHksMk6rVWrNMpLBkZsXq6rW-apdcIBJ_LMFUM4ANdfBVXqe_GourdTtbGaGCUTOr1foMGpW1SrEwgEbR7reXTtoZJwiZos9hq9bN_af6OE4GsIvmmhdVVehBswf4KzJ6bhoY9c-7cwq9xgmJ_j331-0nW_mYFW2et4zc2Mtd0VcJUBm3eqBELnoXrymOm_jet0UOM9m6J5Wy9IaDjrj3DQ3yukYhxr1ouugr4SvIxADLliq0Ii9Q67HVM9g1"/>
</div>
<div>
<p class="text-sm font-bold text-slate-900">Robert Fox</p>
<p class="text-[11px] text-slate-400">ID: #CL-8921</p>
</div>
</div>
</td>
<td class="px-6 py-4">
<div class="text-sm text-slate-600">+1 234 567 890</div>
<div class="text-xs text-slate-400">robert.fox@email.com</div>
</td>
<td class="px-6 py-4">
<div class="flex items-center gap-1 text-sm text-slate-600">
<span class="material-symbols-outlined text-[16px] text-slate-400">location_on</span>
                                        New York, NY
                                    </div>
</td>
<td class="px-6 py-4">
<span class="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase rounded-full">Hot Lead</span>
</td>
<td class="px-6 py-4">
<div class="text-sm text-slate-900 font-medium">In 2 hours</div>
<div class="text-[10px] text-slate-400">Phone Call</div>
</td>
<td class="px-6 py-4 text-right">
<button class="text-slate-400 hover:text-primary transition-colors">
<span class="material-symbols-outlined">edit_square</span>
</button>
</td>
</tr>
<tr class="hover:bg-slate-50/50 transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="size-10 rounded-full overflow-hidden flex-shrink-0 border border-slate-100">
<img alt="Jane Cooper" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtZi8Wxwf_0GNvXkhL1sPvrobfJG2FQDMquemsehbNoOt2tstiJ2oM1s2ajMVIpHqdSbxfPpf_gzgEXPuOcOoINK7QUdNTB3DolaQ4-Aj1bEsgxEwjLtQMvPQwhvUkRRlKix3KkG7T5Wu7zhzJmepkl7aPYGCYDnWsRVo0QuCE_bz86WtNaMXIjreWwD4TQeciZ5h4hvBTUsMcPNZgPoT8B9GU4BzrycAlSC2ShRlKxue1UTVOsjrCon5VTYRxHdGLdg8M_rmuhAsc"/>
</div>
<div>
<p class="text-sm font-bold text-slate-900">Jane Cooper</p>
<p class="text-[11px] text-slate-400">ID: #CL-8942</p>
</div>
</div>
</td>
<td class="px-6 py-4">
<div class="text-sm text-slate-600">+1 987 654 321</div>
<div class="text-xs text-slate-400">j.cooper@cloud.com</div>
</td>
<td class="px-6 py-4">
<div class="flex items-center gap-1 text-sm text-slate-600">
<span class="material-symbols-outlined text-[16px] text-slate-400">location_on</span>
                                        Los Angeles, CA
                                    </div>
</td>
<td class="px-6 py-4">
<span class="px-3 py-1 bg-amber-50 text-amber-600 text-[10px] font-bold uppercase rounded-full">Viewing</span>
</td>
<td class="px-6 py-4">
<div class="text-sm text-slate-900 font-medium">Tomorrow</div>
<div class="text-[10px] text-slate-400">Site Meeting</div>
</td>
<td class="px-6 py-4 text-right">
<button class="text-slate-400 hover:text-primary transition-colors">
<span class="material-symbols-outlined">edit_square</span>
</button>
</td>
</tr>
<tr class="hover:bg-slate-50/50 transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="size-10 rounded-full overflow-hidden flex-shrink-0 border border-slate-100">
<img alt="Cody Fisher" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAas96lzFzEcQwetYbCtQ6rJPh2jM-37pmmXByatcA3zw9j0p2eWMaE7GKaD9w7mFo3f6WNUqtZcbq1_GPhdO3gY1v1HwnnCb3MRefII2rx-27Ed7XSy-SW24n0JnDDb0RGCYFp_DxRaS5cgsVhyuepDX-lcPXFoH9Xm400jnogTf6gm2nlhuRm7gz-jsu9ihDPtIWMOOD4j3kgazW348XpsonJ5ep0V9g29SSLN13ZfZ09FsZgY03AMRZLOl1idmOrw2q5N_gYoNMa"/>
</div>
<div>
<p class="text-sm font-bold text-slate-900">Cody Fisher</p>
<p class="text-[11px] text-slate-400">ID: #CL-7731</p>
</div>
</div>
</td>
<td class="px-6 py-4">
<div class="text-sm text-slate-600">+1 555 012 345</div>
<div class="text-xs text-slate-400">cody.f@realty.io</div>
</td>
<td class="px-6 py-4">
<div class="flex items-center gap-1 text-sm text-slate-600">
<span class="material-symbols-outlined text-[16px] text-slate-400">location_on</span>
                                        Chicago, IL
                                    </div>
</td>
<td class="px-6 py-4">
<span class="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase rounded-full">Closed</span>
</td>
<td class="px-6 py-4">
<div class="text-sm text-slate-900 font-medium">In 2 days</div>
<div class="text-[10px] text-slate-400">Feedback Call</div>
</td>
<td class="px-6 py-4 text-right">
<button class="text-slate-400 hover:text-primary transition-colors">
<span class="material-symbols-outlined">edit_square</span>
</button>
</td>
</tr>
<tr class="hover:bg-slate-50/50 transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="size-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 border border-slate-100 text-primary font-bold text-xs">
                                            BC
                                        </div>
<div>
<p class="text-sm font-bold text-slate-900">Bessie Cooper</p>
<p class="text-[11px] text-slate-400">ID: #CL-6651</p>
</div>
</div>
</td>
<td class="px-6 py-4">
<div class="text-sm text-slate-600">+1 222 888 777</div>
<div class="text-xs text-slate-400">bessie.c@gmail.com</div>
</td>
<td class="px-6 py-4">
<div class="flex items-center gap-1 text-sm text-slate-600">
<span class="material-symbols-outlined text-[16px] text-slate-400">location_on</span>
                                        San Francisco, CA
                                    </div>
</td>
<td class="px-6 py-4">
<span class="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase rounded-full">New Lead</span>
</td>
<td class="px-6 py-4">
<div class="text-sm text-slate-900 font-medium">Next Week</div>
<div class="text-[10px] text-slate-400">Initial Outreach</div>
</td>
<td class="px-6 py-4 text-right">
<button class="text-slate-400 hover:text-primary transition-colors">
<span class="material-symbols-outlined">edit_square</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div class="p-4 bg-slate-50/30 border-t border-slate-50 flex items-center justify-between text-xs text-slate-500 font-medium">
<p>Showing 1 to 4 of 48 clients</p>
<div class="flex gap-2">
<button class="size-8 rounded border border-slate-200 bg-white flex items-center justify-center hover:bg-slate-50 disabled:opacity-50" disabled="">
<span class="material-symbols-outlined text-sm">chevron_left</span>
</button>
<button class="size-8 rounded border border-slate-200 bg-white flex items-center justify-center hover:bg-slate-50">
<span class="material-symbols-outlined text-sm">chevron_right</span>
</button>
</div>
</div>
</section>
</div>
</main>

</body></html>

<!-- Data Overview Dashboard -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Data Overview Dashboard</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#197fe6",
                        "background-light": "#f6f7f8",
                        "background-dark": "#111921",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
<style>
        .ios-shadow {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark font-display text-[#0e141b] dark:text-slate-100 antialiased overflow-x-hidden">
<!-- Top Navigation Bar -->
<header class="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
<div class="flex items-center p-4 justify-between max-w-md mx-auto">
<div class="flex size-10 shrink-0 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
<span class="material-symbols-outlined text-primary">account_circle</span>
</div>
<h1 class="text-[#0e141b] dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center">Data Overview</h1>
<div class="flex w-10 items-center justify-end">
<button class="flex items-center justify-center rounded-lg h-10 w-10 bg-transparent text-[#0e141b] dark:text-slate-100">
<span class="material-symbols-outlined">notifications</span>
</button>
</div>
</div>
</header>
<main class="max-w-md mx-auto pb-24">
<!-- Summary Stats Grid -->
<div class="p-4 grid grid-cols-2 gap-4">
<!-- Total Clients -->
<div class="flex flex-col gap-2 rounded-xl p-5 bg-white dark:bg-slate-800 ios-shadow border border-slate-100 dark:border-slate-700">
<div class="flex justify-between items-start">
<p class="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Clients</p>
<span class="material-symbols-outlined text-primary text-xl">groups</span>
</div>
<p class="text-[#0e141b] dark:text-white text-2xl font-bold">1,284</p>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[#078838] text-sm">trending_up</span>
<p class="text-[#078838] text-xs font-semibold">+5.2%</p>
</div>
</div>
<!-- Today's Follow-ups -->
<div class="flex flex-col gap-2 rounded-xl p-5 bg-white dark:bg-slate-800 ios-shadow border border-slate-100 dark:border-slate-700">
<div class="flex justify-between items-start">
<p class="text-slate-500 dark:text-slate-400 text-sm font-medium">Follow-ups</p>
<span class="material-symbols-outlined text-primary text-xl">event_upcoming</span>
</div>
<p class="text-[#0e141b] dark:text-white text-2xl font-bold">12</p>
<p class="text-slate-400 text-xs font-medium uppercase tracking-wider">Due Today</p>
</div>
<!-- Pending -->
<div class="flex flex-col gap-2 rounded-xl p-5 bg-white dark:bg-slate-800 ios-shadow border border-slate-100 dark:border-slate-700">
<div class="flex justify-between items-start">
<p class="text-slate-500 dark:text-slate-400 text-sm font-medium">Pending</p>
<span class="material-symbols-outlined text-primary text-xl">pending_actions</span>
</div>
<p class="text-[#0e141b] dark:text-white text-2xl font-bold">48</p>
<div class="flex items-center gap-1 text-[#078838]">
<span class="material-symbols-outlined text-sm">check_circle</span>
<p class="text-xs font-semibold">On track</p>
</div>
</div>
<!-- Closed Leads -->
<div class="flex flex-col gap-2 rounded-xl p-5 bg-white dark:bg-slate-800 ios-shadow border border-slate-100 dark:border-slate-700">
<div class="flex justify-between items-start">
<p class="text-slate-500 dark:text-slate-400 text-sm font-medium">Closed</p>
<span class="material-symbols-outlined text-primary text-xl">handshake</span>
</div>
<p class="text-[#0e141b] dark:text-white text-2xl font-bold">326</p>
<div class="flex items-center gap-1 text-[#e73908]">
<span class="material-symbols-outlined text-sm">trending_down</span>
<p class="text-xs font-semibold">-3% MoM</p>
</div>
</div>
</div>
<!-- Section: Client Status Distribution (Donut Chart Simulation) -->
<section class="px-4 py-2">
<h2 class="text-[#0e141b] dark:text-white text-xl font-bold leading-tight tracking-tight mb-3">Client Status</h2>
<div class="rounded-xl bg-white dark:bg-slate-800 p-6 ios-shadow border border-slate-100 dark:border-slate-700">
<div class="flex flex-col items-center">
<!-- Semi-Donut CSS Visual -->
<div class="relative flex items-center justify-center w-48 h-48 mb-6">
<svg class="w-full h-full transform -rotate-90">
<!-- Background Circle -->
<circle class="dark:stroke-slate-700" cx="96" cy="96" fill="transparent" r="80" stroke="#f1f5f9" stroke-width="20"></circle>
<!-- Segment 1: Active (40%) -->
<circle cx="96" cy="96" fill="transparent" r="80" stroke="#197fe6" stroke-dasharray="502" stroke-dashoffset="300" stroke-width="20"></circle>
<!-- Segment 2: Warm (30%) -->
<circle class="opacity-80" cx="96" cy="96" fill="transparent" r="80" stroke="#60a5fa" stroke-dasharray="502" stroke-dashoffset="450" stroke-width="20"></circle>
</svg>
<div class="absolute inset-0 flex flex-col items-center justify-center">
<span class="text-3xl font-bold dark:text-white">1,284</span>
<span class="text-xs text-slate-500 dark:text-slate-400 font-medium">TOTAL</span>
</div>
</div>
<!-- Legend -->
<div class="w-full grid grid-cols-2 gap-y-3">
<div class="flex items-center gap-2">
<span class="size-3 rounded-full bg-primary"></span>
<span class="text-sm font-medium text-slate-600 dark:text-slate-300">Active (40%)</span>
</div>
<div class="flex items-center gap-2">
<span class="size-3 rounded-full bg-blue-300"></span>
<span class="text-sm font-medium text-slate-600 dark:text-slate-300">Warm (30%)</span>
</div>
<div class="flex items-center gap-2">
<span class="size-3 rounded-full bg-slate-200 dark:bg-slate-600"></span>
<span class="text-sm font-medium text-slate-600 dark:text-slate-300">Cold (20%)</span>
</div>
<div class="flex items-center gap-2">
<span class="size-3 rounded-full bg-slate-100 dark:bg-slate-700"></span>
<span class="text-sm font-medium text-slate-600 dark:text-slate-300">New (10%)</span>
</div>
</div>
</div>
</div>
</section>
<!-- Section: Follow-up Trends (Bar Chart) -->
<section class="px-4 py-6">
<div class="flex items-center justify-between mb-3">
<h2 class="text-[#0e141b] dark:text-white text-xl font-bold leading-tight tracking-tight">Follow-up Trends</h2>
<div class="flex items-center gap-1 text-primary cursor-pointer">
<span class="text-sm font-bold">Week</span>
<span class="material-symbols-outlined text-sm">keyboard_arrow_down</span>
</div>
</div>
<div class="rounded-xl bg-white dark:bg-slate-800 p-6 ios-shadow border border-slate-100 dark:border-slate-700">
<div class="flex items-end justify-between h-40 gap-2 mb-4">
<!-- Monday -->
<div class="flex-1 flex flex-col items-center gap-2">
<div class="w-full bg-primary/20 dark:bg-primary/10 rounded-t-lg relative" style="height: 60%;">
<div class="absolute bottom-0 w-full bg-primary rounded-t-lg" style="height: 100%;"></div>
</div>
<span class="text-[10px] font-bold text-slate-400">M</span>
</div>
<!-- Tuesday -->
<div class="flex-1 flex flex-col items-center gap-2">
<div class="w-full bg-primary/20 dark:bg-primary/10 rounded-t-lg relative" style="height: 85%;">
<div class="absolute bottom-0 w-full bg-primary rounded-t-lg" style="height: 100%;"></div>
</div>
<span class="text-[10px] font-bold text-slate-400">T</span>
</div>
<!-- Wednesday -->
<div class="flex-1 flex flex-col items-center gap-2">
<div class="w-full bg-primary/20 dark:bg-primary/10 rounded-t-lg relative" style="height: 45%;">
<div class="absolute bottom-0 w-full bg-primary rounded-t-lg" style="height: 100%;"></div>
</div>
<span class="text-[10px] font-bold text-slate-400">W</span>
</div>
<!-- Thursday -->
<div class="flex-1 flex flex-col items-center gap-2">
<div class="w-full bg-primary/20 dark:bg-primary/10 rounded-t-lg relative" style="height: 95%;">
<div class="absolute bottom-0 w-full bg-primary rounded-t-lg" style="height: 100%;"></div>
</div>
<span class="text-[10px] font-bold text-slate-400">T</span>
</div>
<!-- Friday -->
<div class="flex-1 flex flex-col items-center gap-2">
<div class="w-full bg-primary/20 dark:bg-primary/10 rounded-t-lg relative" style="height: 70%;">
<div class="absolute bottom-0 w-full bg-primary rounded-t-lg" style="height: 100%;"></div>
</div>
<span class="text-[10px] font-bold text-slate-400">F</span>
</div>
<!-- Saturday -->
<div class="flex-1 flex flex-col items-center gap-2">
<div class="w-full bg-primary/20 dark:bg-primary/10 rounded-t-lg relative" style="height: 30%;">
<div class="absolute bottom-0 w-full bg-primary rounded-t-lg" style="height: 100%;"></div>
</div>
<span class="text-[10px] font-bold text-slate-400">S</span>
</div>
<!-- Sunday -->
<div class="flex-1 flex flex-col items-center gap-2">
<div class="w-full bg-primary/20 dark:bg-primary/10 rounded-t-lg relative" style="height: 20%;">
<div class="absolute bottom-0 w-full bg-primary rounded-t-lg" style="height: 100%;"></div>
</div>
<span class="text-[10px] font-bold text-slate-400">S</span>
</div>
</div>
<div class="pt-4 border-t border-slate-50 dark:border-slate-700 flex justify-between items-center">
<p class="text-sm text-slate-500 dark:text-slate-400">Daily Average</p>
<p class="text-sm font-bold dark:text-white">8.4 Outreach</p>
</div>
</div>
</section>
</main>
<!-- Bottom Navigation Bar (iOS Style) -->
<nav class="fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 pb-6 pt-2">
<div class="max-w-md mx-auto flex justify-around items-center">
<button class="flex flex-col items-center gap-1 text-primary">
<span class="material-symbols-outlined">dashboard</span>
<span class="text-[10px] font-bold">Overview</span>
</button>
<button class="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500">
<span class="material-symbols-outlined">group</span>
<span class="text-[10px] font-bold">Clients</span>
</button>
<button class="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500">
<span class="material-symbols-outlined">add_circle</span>
<span class="text-[10px] font-bold">Add</span>
</button>
<button class="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500">
<span class="material-symbols-outlined">chat_bubble</span>
<span class="text-[10px] font-bold">Inbox</span>
</button>
<button class="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500">
<span class="material-symbols-outlined">settings</span>
<span class="text-[10px] font-bold">Settings</span>
</button>
</div>
</nav>
</body></html>

<!-- AI CRM Assistant Chat -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>AI CRM Assistant Chat</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#197fe6",
                        "background-light": "#f6f7f8",
                        "background-dark": "#111921",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
<style>
        body {
            font-family: 'Inter', sans-serif;
        }
        .ios-blur {
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark text-[#0e141b] dark:text-slate-50 min-h-screen flex flex-col overflow-x-hidden">
<!-- Top Navigation Bar -->
<header class="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 ios-blur border-b border-gray-200 dark:border-gray-800">
<div class="flex items-center p-4 justify-between max-w-lg mx-auto w-full">
<div class="flex items-center gap-2">
<div class="text-[#0e141b] dark:text-slate-50 cursor-pointer p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
<span class="material-symbols-outlined">arrow_back_ios</span>
</div>
</div>
<div class="flex flex-col items-center">
<h2 class="text-[#0e141b] dark:text-slate-50 text-lg font-bold leading-tight tracking-tight">AI Assistant</h2>
<div class="flex items-center gap-1">
<span class="w-2 h-2 bg-green-500 rounded-full"></span>
<span class="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Online</span>
</div>
</div>
<div class="flex items-center">
<button class="flex items-center justify-center rounded-full h-10 w-10 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
<span class="material-symbols-outlined text-[#0e141b] dark:text-slate-50">history</span>
</button>
</div>
</div>
</header>
<!-- Chat Area -->
<main class="flex-1 flex flex-col p-4 gap-6 max-w-lg mx-auto w-full pb-32">
<!-- Welcome Message -->
<div class="flex flex-col items-center justify-center py-8 text-center gap-2">
<div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-2">
<span class="material-symbols-outlined text-primary text-4xl">auto_awesome</span>
</div>
<h3 class="text-xl font-bold">Good morning, Agent</h3>
<p class="text-sm text-gray-500 dark:text-gray-400">Ask about your leads, property listings, or schedule.</p>
</div>
<!-- User Message -->
<div class="flex items-end gap-3 justify-end">
<div class="flex flex-1 flex-col gap-1 items-end">
<p class="text-[#4e7397] dark:text-gray-400 text-[12px] font-medium leading-normal max-w-[360px] text-right">You</p>
<div class="text-base font-normal leading-relaxed max-w-[85%] rounded-2xl rounded-tr-none px-4 py-3 bg-primary text-white shadow-sm">
                    Show me my top leads for this week.
                </div>
</div>
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-8 shrink-0 border border-gray-200" data-alt="Professional real estate agent profile headshot" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBQ7ZsWYaLzRQPORwnbDOvIpvLTfANw_aUl444j5BAXHSiHLouXcCjGdA3vYP1hRhFcuz9f6K70lwwHQRkLOoFc_WOMGtuRtwWeR64Cug3S_D6Jva5YNF4ZNad7vWcv2qTfoeCPqkuaQf5k2G7oPoGXSMOhehJ3CZBV_NC_MfkDGCBMu2atvmzaMt1Hga2r41Kr59QwN6G0wht3cvgezqzuknC3JVc8qIMqEO6w8bxI_1V9f3D89uUu4u466zhxhnIzBEN5NW3iaf8v");'>
</div>
</div>
<!-- AI Message -->
<div class="flex items-start gap-3">
<div class="bg-primary/10 rounded-full w-8 h-8 shrink-0 flex items-center justify-center">
<span class="material-symbols-outlined text-primary text-xl">smart_toy</span>
</div>
<div class="flex flex-1 flex-col gap-1 items-start">
<p class="text-[#4e7397] dark:text-gray-400 text-[12px] font-medium leading-normal max-w-[360px]">AI Assistant</p>
<div class="text-base font-normal leading-relaxed max-w-[90%] rounded-2xl rounded-tl-none px-4 py-3 bg-white dark:bg-gray-800 text-[#0e141b] dark:text-slate-50 shadow-sm border border-gray-100 dark:border-gray-700">
                    I found 4 high-priority leads. <span class="font-semibold text-primary">Sarah Jenkins</span> and <span class="font-semibold text-primary">Michael Chen</span> are most active based on recent email opens and site visits. Would you like to schedule follow-ups?
                </div>
</div>
</div>
<!-- Suggestion Chips -->
<div class="flex gap-2 py-2 overflow-x-auto no-scrollbar ml-11">
<div class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 cursor-pointer hover:bg-gray-50 transition-colors shadow-sm">
<span class="material-symbols-outlined text-primary text-lg">event</span>
<p class="text-[#0e141b] dark:text-slate-50 text-sm font-medium">Schedule follow-ups</p>
</div>
<div class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 cursor-pointer hover:bg-gray-50 transition-colors shadow-sm">
<span class="material-symbols-outlined text-primary text-lg">call</span>
<p class="text-[#0e141b] dark:text-slate-50 text-sm font-medium">Call Sarah</p>
</div>
<div class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 cursor-pointer hover:bg-gray-50 transition-colors shadow-sm">
<span class="material-symbols-outlined text-primary text-lg">list</span>
<p class="text-[#0e141b] dark:text-slate-50 text-sm font-medium">Show more</p>
</div>
</div>
<!-- AI Disclaimer -->
<p class="text-[#4e7397] dark:text-gray-500 text-[11px] font-normal leading-normal py-4 px-4 text-center">
            AI answers are based only on CRM data • Updated 2m ago
        </p>
</main>
<!-- Bottom Input Bar -->
<div class="fixed bottom-0 left-0 right-0 bg-background-light/95 dark:bg-background-dark/95 ios-blur p-4 border-t border-gray-200 dark:border-gray-800">
<div class="max-w-lg mx-auto flex flex-col gap-3">
<div class="relative flex items-center">
<div class="absolute left-3 flex items-center gap-1">
<button class="text-gray-400 hover:text-primary transition-colors p-1">
<span class="material-symbols-outlined">add_circle</span>
</button>
</div>
<input class="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full py-3.5 pl-12 pr-12 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none shadow-inner dark:text-white transition-all" placeholder="Ask anything about your CRM data" type="text"/>
<div class="absolute right-2">
<button class="bg-primary text-white rounded-full p-2 flex items-center justify-center shadow-md hover:bg-blue-600 active:scale-95 transition-all">
<span class="material-symbols-outlined">arrow_upward</span>
</button>
</div>
</div>
<!-- iOS Home Indicator Spacing -->
<div class="h-4"></div>
</div>
</div>
</body></html>

<!-- Client Entry Form -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Client Entry Form</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#197fe6",
                        "background-light": "#f6f7f8",
                        "background-dark": "#111921",
                        "danger": "#ef4444",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
<style>
        body {
            font-family: 'Inter', sans-serif;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark min-h-screen text-[#0e141b] dark:text-slate-100">
<!-- Top Navigation Bar -->
<header class="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
<div class="flex items-center p-4 justify-between max-w-md mx-auto">
<div class="w-12">
<p class="text-primary text-base font-medium leading-normal cursor-pointer">Cancel</p>
</div>
<h1 class="text-[#0e141b] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Client Entry Form</h1>
<div class="w-12 flex justify-end">
<span class="material-symbols-outlined text-[#0e141b] dark:text-white">more_horiz</span>
</div>
</div>
</header>
<main class="max-w-md mx-auto pb-32">
<!-- Photo Upload Section -->
<div class="flex p-6 @container justify-center">
<div class="flex flex-col gap-4 items-center">
<div class="relative">
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32 border-4 border-white dark:border-slate-800 shadow-sm" data-alt="Professional profile picture placeholder" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCDeODodLhojTWcLDsBt81ZVEeKJorRobQ4HCAkJwQ4kRl8_awRUCrgh5YeXT3taYkb9JYjDtcRjgpFYkqFyuWlR1jPF54uq4YLVRwMMMhABmeHx0nAeSwXz2kuYPctz_Yuc4JaedlaiO7YtAK_jzyAo-9P69LahPWKQcAShftumrm6hNkwuR-osqWQHs2FLyrvUdv6Hp5kPldHpPFkmOl_MuGG2apujV9cE5eX_ZENn2K8Z49BguSANwznhjMCALnT92fshNhBg6y1");'>
</div>
<div class="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full shadow-lg flex items-center justify-center">
<span class="material-symbols-outlined text-sm">photo_camera</span>
</div>
</div>
<div class="flex flex-col items-center justify-center">
<p class="text-primary text-base font-semibold leading-normal cursor-pointer">Edit Profile Photo</p>
</div>
</div>
</div>
<form class="space-y-2">
<!-- Section: Primary Contact -->
<div class="px-4">
<div class="flex flex-col gap-4 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<label class="flex flex-col flex-1">
<p class="text-[#0e141b] dark:text-slate-200 text-sm font-bold uppercase tracking-wider pb-2">Primary Contact Number</p>
<div class="flex w-full flex-1 items-stretch rounded-lg">
<input class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e141b] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-slate-800 h-16 placeholder:text-[#4e7397] p-[15px] rounded-r-none border-r-0 text-xl font-bold tracking-widest" maxlength="10" placeholder="000-000-0000" type="tel"/>
<div class="text-[#4e7397] flex border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-slate-800 items-center justify-center pr-[15px] rounded-r-lg border-l-0">
<span class="material-symbols-outlined">call</span>
</div>
</div>
</label>
</div>
</div>
<!-- Section: Basic Information -->
<h3 class="text-[#0e141b] dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-6">Basic Information</h3>
<div class="px-4 space-y-4">
<div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-4 space-y-4">
<label class="flex flex-col flex-1">
<p class="text-[#0e141b] dark:text-slate-200 text-sm font-medium pb-1">Client Name</p>
<input class="form-input flex w-full rounded-lg text-[#0e141b] dark:text-white focus:ring-2 focus:ring-primary border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-slate-800 h-14 placeholder:text-[#4e7397] p-[15px] text-base" placeholder="John Doe"/>
</label>
<div class="grid grid-cols-2 gap-4">
<label class="flex flex-col flex-1">
<p class="text-[#0e141b] dark:text-slate-200 text-sm font-medium pb-1">Profession</p>
<input class="form-input flex w-full rounded-lg text-[#0e141b] dark:text-white focus:ring-2 focus:ring-primary border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-slate-800 h-14 placeholder:text-[#4e7397] p-[15px] text-base" placeholder="Architect"/>
</label>
<label class="flex flex-col flex-1">
<p class="text-[#0e141b] dark:text-slate-200 text-sm font-medium pb-1">City</p>
<input class="form-input flex w-full rounded-lg text-[#0e141b] dark:text-white focus:ring-2 focus:ring-primary border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-slate-800 h-14 placeholder:text-[#4e7397] p-[15px] text-base" placeholder="New York"/>
</label>
</div>
<label class="flex flex-col flex-1">
<p class="text-[#0e141b] dark:text-slate-200 text-sm font-medium pb-1">Email Address</p>
<input class="form-input flex w-full rounded-lg text-[#0e141b] dark:text-white focus:ring-2 focus:ring-primary border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-slate-800 h-14 placeholder:text-[#4e7397] p-[15px] text-base" placeholder="client@example.com" type="email"/>
</label>
</div>
</div>
<!-- Section: Property Interest -->
<h3 class="text-[#0e141b] dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-6">Property Requirements</h3>
<div class="px-4 space-y-4">
<div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-4 space-y-4">
<label class="flex flex-col flex-1">
<p class="text-[#0e141b] dark:text-slate-200 text-sm font-medium pb-1">Project Name</p>
<input class="form-input flex w-full rounded-lg text-[#0e141b] dark:text-white focus:ring-2 focus:ring-primary border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-slate-800 h-14 placeholder:text-[#4e7397] p-[15px] text-base" placeholder="Skyline Towers"/>
</label>
<div class="grid grid-cols-2 gap-4">
<label class="flex flex-col flex-1">
<p class="text-[#0e141b] dark:text-slate-200 text-sm font-medium pb-1">Property Type</p>
<select class="form-select flex w-full rounded-lg text-[#0e141b] dark:text-white focus:ring-2 focus:ring-primary border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-slate-800 h-14 p-[15px] text-base appearance-none">
<option>Apartment</option>
<option>Villa</option>
<option>Condo</option>
<option>Townhouse</option>
<option>Commercial</option>
</select>
</label>
<label class="flex flex-col flex-1">
<p class="text-[#0e141b] dark:text-slate-200 text-sm font-medium pb-1">Budget Range</p>
<input class="form-input flex w-full rounded-lg text-[#0e141b] dark:text-white focus:ring-2 focus:ring-primary border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-slate-800 h-14 placeholder:text-[#4e7397] p-[15px] text-base" placeholder="$500k - $800k"/>
</label>
</div>
<label class="flex flex-col flex-1">
<p class="text-[#0e141b] dark:text-slate-200 text-sm font-medium pb-1">Preferred Location</p>
<div class="flex w-full items-stretch rounded-lg">
<input class="form-input flex w-full min-w-0 flex-1 rounded-lg text-[#0e141b] dark:text-white focus:ring-2 focus:ring-primary border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-slate-800 h-14 placeholder:text-[#4e7397] p-[15px] rounded-r-none border-r-0 text-base" placeholder="Downtown / suburbs"/>
<div class="text-primary flex border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-slate-800 items-center justify-center pr-[15px] rounded-r-lg border-l-0">
<span class="material-symbols-outlined">location_on</span>
</div>
</div>
</label>
</div>
</div>
<!-- Section: Follow-up & Management -->
<h3 class="text-[#0e141b] dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-6">Management</h3>
<div class="px-4 space-y-4">
<div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-4 space-y-4">
<div class="grid grid-cols-2 gap-4">
<label class="flex flex-col flex-1">
<p class="text-[#0e141b] dark:text-slate-200 text-sm font-medium pb-1">Lead Status</p>
<select class="form-select flex w-full rounded-lg text-[#0e141b] dark:text-white focus:ring-2 focus:ring-primary border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-slate-800 h-14 p-[15px] text-base appearance-none">
<option>New Lead</option>
<option selected="">Hot</option>
<option>Follow-up</option>
<option>Negotiation</option>
<option>Closed</option>
</select>
</label>
<label class="flex flex-col flex-1">
<p class="text-[#0e141b] dark:text-slate-200 text-sm font-medium pb-1">Follow-up Date</p>
<input class="form-input flex w-full rounded-lg text-[#0e141b] dark:text-white focus:ring-2 focus:ring-primary border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-slate-800 h-14 p-[15px] text-sm" type="datetime-local"/>
</label>
</div>
<label class="flex flex-col flex-1">
<p class="text-[#0e141b] dark:text-slate-200 text-sm font-medium pb-1">Notes</p>
<textarea class="form-textarea flex w-full min-h-[120px] rounded-lg text-[#0e141b] dark:text-white focus:ring-2 focus:ring-primary border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-slate-800 p-[15px] text-base resize-none" placeholder="Add detailed notes about the client's preferences..."></textarea>
</label>
</div>
</div>
<!-- Destructive Action -->
<div class="px-4 pt-8 pb-12 flex justify-center">
<button class="flex items-center gap-2 text-danger font-semibold text-base py-2 px-4 rounded-lg active:bg-danger/10" type="button">
<span class="material-symbols-outlined text-xl">delete</span>
                    Delete Client
                </button>
</div>
</form>
</main>
<!-- Bottom Action Bar -->
<footer class="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-4 pb-8">
<div class="max-w-md mx-auto">
<button class="w-full bg-primary hover:bg-primary/90 text-white font-bold h-14 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transition-colors">
<span class="material-symbols-outlined">save</span>
                Save Client Information
            </button>
</div>
</footer>
</body></html>

<!-- Side Navigation Menu -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Side Navigation Menu - Real Estate CRM</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#197fe6",
                        "background-light": "#f6f7f8",
                        "background-dark": "#111921",
                    },
                    fontFamily: {
                        "display": ["Inter"]
                    },
                    borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark font-display antialiased">
<!-- Main App Container (Simulating a Mobile Screen) -->
<div class="relative mx-auto h-[844px] w-[390px] overflow-hidden bg-white shadow-2xl dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
<!-- Background Mock Content (The CRM Dashboard) -->
<div class="p-6 opacity-40">
<div class="flex items-center justify-between mb-8">
<div class="h-8 w-8 rounded-full bg-slate-200"></div>
<div class="h-6 w-32 bg-slate-200 rounded"></div>
<div class="h-8 w-8 rounded-full bg-slate-200"></div>
</div>
<div class="space-y-4">
<div class="h-32 w-full bg-slate-100 rounded-xl"></div>
<div class="h-32 w-full bg-slate-100 rounded-xl"></div>
<div class="h-32 w-full bg-slate-100 rounded-xl"></div>
<div class="h-32 w-full bg-slate-100 rounded-xl"></div>
</div>
</div>
<!-- Backdrop Overlay -->
<div class="absolute inset-0 z-40 bg-black/40 backdrop-blur-[2px]"></div>
<!-- Side Navigation Drawer (Half Width) -->
<div class="absolute inset-y-0 left-0 z-50 flex w-1/2 flex-col bg-white dark:bg-background-dark shadow-2xl transition-transform duration-300">
<!-- User Profile Section -->
<div class="flex flex-col gap-3 px-6 pb-6 pt-14 border-b border-slate-100 dark:border-slate-800">
<div class="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-primary/10">
<img alt="User Avatar" class="h-full w-full object-cover" data-alt="Professional portrait of a female real estate agent" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCc5Ap6r5TEvTLA-WgwJeaAgkY6a3Dg4Xi87uGxhoHCcV5CaTZ-YdRnbl0KJvErWK2YRUhUAfYduqoQiR5C07YAm8fiseE8u9aiLWhl6tkWFE5eb2b7id6PuPENB0ZHlXyYumBcGbsSJo2hfDa9bqDUiSoxkpHAjQo07hf8qWiPO_PlkA5srwfYRQ6JbLiinXCiEhP_ySjn9SfPl2PFLJnbcpFUjA0SNi86zUxSHnAnfwV_JTF3XDrlhwWTKKiHRgI8VpzpjH6pvWf"/>
</div>
<div>
<h2 class="text-lg font-bold leading-tight text-slate-900 dark:text-white">Jane Cooper</h2>
<p class="text-xs font-medium text-slate-500 dark:text-slate-400">Senior Real Estate Agent</p>
</div>
</div>
<!-- Navigation Items -->
<nav class="flex-1 px-3 py-6">
<ul class="flex flex-col gap-1">
<!-- New Entry -->
<li>
<a class="group flex h-12 items-center gap-3 rounded-lg px-3 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800" href="#">
<span class="material-symbols-outlined text-slate-600 group-hover:text-primary dark:text-slate-400">add_circle</span>
<span class="text-sm font-semibold text-slate-700 dark:text-slate-200">New Entry</span>
</a>
</li>
<!-- Overview (Active) -->
<li>
<a class="flex h-12 items-center gap-3 rounded-lg bg-primary/10 px-3 transition-colors" href="#">
<span class="material-symbols-outlined text-primary">dashboard</span>
<span class="text-sm font-bold text-primary">Overview</span>
</a>
</li>
<!-- AI Assistant -->
<li>
<a class="group flex h-12 items-center gap-3 rounded-lg px-3 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800" href="#">
<span class="material-symbols-outlined text-slate-600 group-hover:text-primary dark:text-slate-400">magic_button</span>
<span class="text-sm font-semibold text-slate-700 dark:text-slate-200">AI Assistant</span>
</a>
</li>
<!-- Clients (Optional for Context) -->
<li>
<a class="group flex h-12 items-center gap-3 rounded-lg px-3 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800" href="#">
<span class="material-symbols-outlined text-slate-600 group-hover:text-primary dark:text-slate-400">group</span>
<span class="text-sm font-semibold text-slate-700 dark:text-slate-200">Clients</span>
</a>
</li>
</ul>
</nav>
<!-- Bottom Section: Logout -->
<div class="mt-auto border-t border-slate-100 p-4 dark:border-slate-800">
<button class="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-100 py-3 text-sm font-bold text-slate-900 transition-all active:scale-95 dark:bg-slate-800 dark:text-white">
<span class="material-symbols-outlined text-[20px]">logout</span>
<span>Logout</span>
</button>
<!-- iOS Home Indicator Spacing -->
<div class="h-6"></div>
</div>
</div>
<!-- iOS Status Bar Mockup -->
<div class="absolute left-0 top-0 z-[60] flex h-11 w-full items-end justify-between px-8 text-black dark:text-white">
<span class="text-sm font-bold">9:41</span>
<div class="flex gap-1.5">
<span class="material-symbols-outlined text-[18px]">signal_cellular_4_bar</span>
<span class="material-symbols-outlined text-[18px]">wifi</span>
<span class="material-symbols-outlined text-[18px]">battery_full</span>
</div>
</div>
</div>
</body></html>