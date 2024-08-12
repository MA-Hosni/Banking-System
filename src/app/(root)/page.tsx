import HeaderBox from '@/components/HeaderBox'
// import RecentTransactions from '@/components/RecentTransactions';
import RightSidebar from '@/components/RightSidebar';
import TotalBalenceBox from '@/components/TotalBalenceBox';
// import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
// import { getLoggedInUser } from '@/lib/actions/user.actions';


export default function Home() {
  const loggedIn = { firstName: 'Mohamed Ali', lastName: 'Hosni', email: 'test123@gmail.com'}


  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalenceBox
            accounts={[]}
            totalBanks={5}
            totalCurrentBalance={1250.35}
          />
        </header>
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.50},{ currentBalance: 800}]}
      />
    </section>
  );
}
