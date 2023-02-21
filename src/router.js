import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "./pages/Dashboard.vue";
import Analytics from "./pages/Analytics.vue";
import Fintech from "./pages/Fintech.vue";
import Customers from "./pages/ecommerce/Customers.vue";
import Orders from "./pages/ecommerce/Orders.vue";
import Invoices from "./pages/ecommerce/Invoices.vue";
import Shop from "./pages/ecommerce/Shop.vue";
import Shop2 from "./pages/ecommerce/Shop2.vue";
import Product from "./pages/ecommerce/Product.vue";
import Cart from "./pages/ecommerce/Cart.vue";
import Cart2 from "./pages/ecommerce/Cart2.vue";
import Cart3 from "./pages/ecommerce/Cart3.vue";
import Pay from "./pages/ecommerce/Pay.vue";
import Campaigns from "./pages/Campaigns.vue";
import UsersTabs from "./pages/community/UsersTabs.vue";
import UsersTiles from "./pages/community/UsersTiles.vue";
import Profile from "./pages/community/Profile.vue";
import Feed from "./pages/community/Feed.vue";
import Forum from "./pages/community/Forum.vue";
import ForumPost from "./pages/community/ForumPost.vue";
import Meetups from "./pages/community/Meetups.vue";
import MeetupsPost from "./pages/community/MeetupsPost.vue";
import CreditCards from "./pages/finance/CreditCards.vue";
import Transactions from "./pages/finance/Transactions.vue";
import TransactionDetails from "./pages/finance/TransactionDetails.vue";
import JobListing from "./pages/job/JobListing.vue";
import JobPost from "./pages/job/JobPost.vue";
import CompanyProfile from "./pages/job/CompanyProfile.vue";
import Messages from "./pages/Messages.vue";
import TasksKanban from "./pages/tasks/TasksKanban.vue";
import TasksList from "./pages/tasks/TasksList.vue";
import Inbox from "./pages/Inbox.vue";
import Calendar from "./pages/Calendar.vue";
import Account from "./pages/settings/Account.vue";
import Notifications from "./pages/settings/Notifications.vue";
import Apps from "./pages/settings/Apps.vue";
import Plans from "./pages/settings/Plans.vue";
import Billing from "./pages/settings/Billing.vue";
import Feedback from "./pages/settings/Feedback.vue";
import Changelog from "./pages/utility/Changelog.vue";
import Roadmap from "./pages/utility/Roadmap.vue";
import Faqs from "./pages/utility/Faqs.vue";
import EmptyState from "./pages/utility/EmptyState.vue";
import PageNotFound from "./pages/utility/PageNotFound.vue";
import KnowledgeBase from "./pages/utility/KnowledgeBase.vue";
import Signin from "./pages/auth/Signin/Index.vue";
import Signup from "./pages/auth/Signup/Index.vue";
import ResetPassword from "./pages/auth/ResetPassword/Index.vue";
import SetNewPassword from "./pages/auth/ResetPassword/EnterNewPassword/Index.vue";
import AccountVerification from "./pages/auth/VerifikasiEmail/Index.vue"
import AccountVerificationSuccess from "./pages/auth/ResponVerifikasiEmail/Index.vue"
import Onboarding01 from "./pages/Onboarding01.vue";
import Onboarding02 from "./pages/Onboarding02.vue";
import Onboarding03 from "./pages/Onboarding03.vue";
import Onboarding04 from "./pages/Onboarding04.vue";
import ButtonPage from "./pages/component/ButtonPage.vue";
import FormPage from "./pages/component/FormPage.vue";
import DropdownPage from "./pages/component/DropdownPage.vue";
import AlertPage from "./pages/component/AlertPage.vue";
import ModalPage from "./pages/component/ModalPage.vue";
import PaginationPage from "./pages/component/PaginationPage.vue";
import TabsPage from "./pages/component/TabsPage.vue";
import BreadcrumbPage from "./pages/component/BreadcrumbPage.vue";
import BadgePage from "./pages/component/BadgePage.vue";
import AvatarPage from "./pages/component/AvatarPage.vue";
import TooltipPage from "./pages/component/TooltipPage.vue";
import AccordionPage from "./pages/component/AccordionPage.vue";
import IconsPage from "./pages/component/IconsPage.vue";
import LayoutUtama from "./pages/layout/Utama.vue";
import SettingsBidangTabel from "./pages/settings/Bidang/Tabel.vue";
import SettingsIndustriTabel from "./pages/settings/Industri/Tabel.vue";
import SettingsKelasTabel from "./pages/settings/Kelas/Tabel.vue";
import Homepage from "./pages/Homepage/Index.vue";
import DetailExpert from "./pages/Experts/DetailExpert/Index.vue";
import FormKonsultasi from "./pages/Experts/DetailExpert/Services/Konsultasi/Index.vue";
import FormPelatihan from "./pages/Experts/DetailExpert/Services/Pelatihan/Index.vue";
import FormUndangExpert from "./pages/Experts/DetailExpert/Services/UndangExpert/Index.vue";
import FormRekrutExpert from "./pages/Experts/DetailExpert/Services/RekrutExpert/Index.vue";
import CariExpert from "./pages/Experts/CariExpert/Index.vue";
import LayananKonsultasiNavbar from "./pages/Homepage/MenuLayananNavBar/Konsultasi/Index.vue";
import LayananPelatihanNavbar from "./pages/Homepage/MenuLayananNavBar/Pelatihan/Index.vue";
import LayananUndangExpertNavbar from "./pages/Homepage/MenuLayananNavBar/UndangExpert/Index.vue";
import LayananRekrutExpertNavbar from "./pages/Homepage/MenuLayananNavBar/RekrutExpert/Index.vue";
import JadiExpert from "./pages/Experts/JadiExpert/Index.vue";
import DashboardFormTambahExpert from "./pages/settings/SubMenuExperts/ExpertPermanent/Form/Index.vue";
import DashboardFormEditExpert from "./pages/settings/SubMenuExperts/ExpertPermanent/Edit/Index.vue";
import DashboardTableTambahExpert from "./pages/settings/SubMenuExperts/ExpertPermanent/Table/Index.vue";
import FormJadiExpert from "./pages/Experts/JadiExpert/Formulir/Index.vue";
import DashboardFormPengajuanExpert from "./pages/settings/SubMenuExperts/PengajuanExpert/Form/Index.vue";
import DashboardTablePengajuanExpert from "./pages/settings/SubMenuExperts/PengajuanExpert/Table/Index.vue";
import DashboardTablePengguna from "./pages/settings/Pengguna/Table/Index.vue"
import DashboardFormTambahPengguna from "./pages/settings/Pengguna/Form/Index.vue"
import DashboardFormEditPengguna from "./pages/settings/Pengguna/Edit/Index.vue"
import DashboardKonsultasi from "./pages/konsultasi/Table/Index.vue"
import ProfilPengguna from "./pages/ProfilPengguna/Index.vue"
import EditDataUtamaProfilPengguna from "./pages/ProfilPengguna/EditDataUtama/Index.vue"
import EditDataTambahanProfilPengguna from "./pages/ProfilPengguna/EditDataTambahan/Index.vue"

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: LayoutUtama,
      children: [
        {
          path: "/",
          component: Homepage,
        },
        {
          path: "/dashboard/main",
          component: Dashboard,
        },
        {
          path: "/dashboard/analytics",
          component: Analytics,
        },
        {
          path: "/settings/bidang/tabel",
          component: SettingsBidangTabel,
        },
        {
          path: "/settings/industri/tabel",
          component: SettingsIndustriTabel,
        },
        {
          path: "/settings/kelas/tabel",
          component: SettingsKelasTabel,
        },
        {
          path: "/experts/detailexpert/:id",
          component: DetailExpert,
        },
        {
          path: "/experts/formkonsultasi/:id",
          component: FormKonsultasi,
        },
        {
          path: "/experts/formpelatihan/:id",
          component: FormPelatihan,
        },
        {
          path: "/experts/formundangexpert/:id",
          component: FormUndangExpert,
        },
        {
          path: "/experts/formrekrutexpert/:id",
          component: FormRekrutExpert,
        },
        {
          path: "/experts/cariexpert",
          component: CariExpert,
        },
        {
          path: "/component/modal",
          component: ModalPage,
        },
        {
          path: "/layanan/konsultasi",
          component: LayananKonsultasiNavbar,
        },
        {
          path: "/layanan/pelatihan",
          component: LayananPelatihanNavbar,
        },
        {
          path: "/layanan/undangexpert",
          component: LayananUndangExpertNavbar,
        },
        {
          path: "/layanan/rekrutexpert",
          component: LayananRekrutExpertNavbar,
        },
        {
          path: "/jadiexpert",
          component: JadiExpert,
        },
        {
          path: "/dashboard/formjadiexpert",
          component: DashboardFormTambahExpert,
        }, 
        {
          path: "/dashboard/formeditexpert/:id",
          component: DashboardFormEditExpert,
        },
        {
          path: "/dashboard/tablejadiexpert",
          component: DashboardTableTambahExpert,
        },
        {
          path: "/jadiexpert/formulir",
          component: FormJadiExpert,
        },
        {
          path: "/pengajuanexpert/formulir/:id",
          component: DashboardFormPengajuanExpert,
        },
        {
          path: "/pengajuanexpert/table",
          component: DashboardTablePengajuanExpert,
        },
        {
          path: "/pengguna/table",
          component: DashboardTablePengguna,
        },
        {
          path: "/pengguna/formtambahpengguna",
          component: DashboardFormTambahPengguna,
        },
        {
          path: "/pengguna/formeditpengguna/:id",
          component: DashboardFormEditPengguna,
        },
        {
          path: "/konsultasi/table",
          component: DashboardKonsultasi,
        },
        {
          path: "/profilpengguna",
          component: ProfilPengguna,
        },
        {
          path: "/suntingprofil",
          component: EditDataUtamaProfilPengguna,
        }, 
        {
          path: "/suntingdatatambahan",
          component: EditDataTambahanProfilPengguna,
        },
      ],
    },
    {
      path: "/dashboard/fintech",
      component: Fintech,
    },
    {
      path: "/ecommerce/customers",
      component: Customers,
    },
    {
      path: "/ecommerce/orders",
      component: Orders,
    },
    {
      path: "/ecommerce/invoices",
      component: Invoices,
    },
    {
      path: "/ecommerce/shop",
      component: Shop,
    },
    {
      path: "/ecommerce/shop-2",
      component: Shop2,
    },
    {
      path: "/ecommerce/product",
      component: Product,
    },
    {
      path: "/ecommerce/cart",
      component: Cart,
    },
    {
      path: "/ecommerce/cart-2",
      component: Cart2,
    },
    {
      path: "/ecommerce/cart-3",
      component: Cart3,
    },
    {
      path: "/ecommerce/pay",
      component: Pay,
    },
    {
      path: "/campaigns",
      component: Campaigns,
    },
    {
      path: "/community/users-tabs",
      component: UsersTabs,
    },
    {
      path: "/community/users-tiles",
      component: UsersTiles,
    },
    {
      path: "/community/profile",
      component: Profile,
    },
    {
      path: "/community/feed",
      component: Feed,
    },
    {
      path: "/community/forum",
      component: Forum,
    },
    {
      path: "/community/forum-post",
      component: ForumPost,
    },
    {
      path: "/community/meetups",
      component: Meetups,
    },
    {
      path: "/community/meetups-post",
      component: MeetupsPost,
    },
    {
      path: "/finance/cards",
      component: CreditCards,
    },
    {
      path: "/finance/transactions",
      component: Transactions,
    },
    {
      path: "/finance/transaction-details",
      component: TransactionDetails,
    },
    {
      path: "/job/job-listing",
      component: JobListing,
    },
    {
      path: "/job/job-post",
      component: JobPost,
    },
    {
      path: "/job/company-profile",
      component: CompanyProfile,
    },
    {
      path: "/messages",
      component: Messages,
    },
    {
      path: "/tasks/kanban",
      component: TasksKanban,
    },
    {
      path: "/tasks/list",
      component: TasksList,
    },
    {
      path: "/inbox",
      component: Inbox,
    },
    {
      path: "/calendar",
      component: Calendar,
    },
    {
      path: "/settings/account",
      component: Account,
    },
    {
      path: "/settings/notifications",
      component: Notifications,
    },
    {
      path: "/settings/apps",
      component: Apps,
    },
    {
      path: "/settings/plans",
      component: Plans,
    },
    {
      path: "/settings/billing",
      component: Billing,
    },
    {
      path: "/settings/feedback",
      component: Feedback,
    },
    {
      path: "/utility/changelog",
      component: Changelog,
    },
    {
      path: "/utility/roadmap",
      component: Roadmap,
    },
    {
      path: "/utility/faqs",
      component: Faqs,
    },
    {
      path: "/utility/empty-state",
      component: EmptyState,
    },
    {
      path: "/utility/404",
      component: PageNotFound,
    },
    {
      path: "/utility/knowledge-base",
      component: KnowledgeBase,
    },
    {
      path: "/signin",
      component: Signin,
    },
    {
      path: "/signup",
      component: Signup,
    },
    {
      path: "/verifikasiakun",
      component: AccountVerification,
    },
    {
      path: "/responseverifikasi",
      component: AccountVerificationSuccess,
    },
    {
      path: "/resetpassword",
      component: ResetPassword,
    },
    {
      path: "/setnewpassword",
      component: SetNewPassword,
    },
    {
      path: "/onboarding-01",
      component: Onboarding01,
    },
    {
      path: "/onboarding-02",
      component: Onboarding02,
    },
    {
      path: "/onboarding-03",
      component: Onboarding03,
    },
    {
      path: "/onboarding-04",
      component: Onboarding04,
    },
    {
      path: "/component/button",
      component: ButtonPage,
    },
    {
      path: "/component/form",
      component: FormPage,
    },
    {
      path: "/component/dropdown",
      component: DropdownPage,
    },
    {
      path: "/component/alert",
      component: AlertPage,
    },
    {
      path: "/component/pagination",
      component: PaginationPage,
    },
    {
      path: "/component/tabs",
      component: TabsPage,
    },
    {
      path: "/component/breadcrumb",
      component: BreadcrumbPage,
    },
    {
      path: "/component/badge",
      component: BadgePage,
    },
    {
      path: "/component/avatar",
      component: AvatarPage,
    },
    {
      path: "/component/tooltip",
      component: TooltipPage,
    },
    {
      path: "/component/accordion",
      component: AccordionPage,
    },
    {
      path: "/component/icons",
      component: IconsPage,
    },
    {
      path: "/:pathMatch(.*)*",
      component: PageNotFound,
    },
  ],
});

export default router;
