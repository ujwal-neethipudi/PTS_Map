import { Entity } from '../types';

// CSV data from map_data.csv - paste the CSV content here
const csvData = `S. No.,Entity,Logo,HQ,Domain,Description,Map Bucket 1,Map Bucket 2,Relevance Flag (Y/N),Sub Bucket,Tools/Products
1,Panterra Global,,United Kingdom,https://www.panterra.global/,"Strategic advisory to governments/corporations, communications campaigns, elections & policy-engagement work",Media & Messaging,,Y,,
3,influencethe.com,,Bulgaria,https://influencethe.com/,Disinformation detection & "community intelligence" platform; narrative creation/distribution and counter-messaging; political campaigning services (NationBuilder partner),Media & Messaging,,Y,Information Integrity / Disinformation,
4,Electify,,,,"Secure online election software; customizable, verifiable voting for orgs & public bodies",Voting Tech,,Y,,
5,Genaios GmbH,,Germany,https://genaios.ai/,"AI-powered fact-checking, content originality & AI-text detection (detect fake news, AI-generated text)",Media & Messaging,,Y,,
14,Pakflatt,,United Kingdom,https://www.pakflatt.com/,Manufacturer of polling booths and election-equipment solutions (including accessible voting devices),GovTech / Civic Infrastructure,Voting Tech,Y,,
15,Salesforce Inc.,,United States,https://www.salesforce.com/,"Cloud-based CRM and enterprise software: marketing automation, customer service platforms, data & analytics, AI-driven customer engagement",Organisational Infrastructure,,Y,,
16,Pelidum Trust & Safety,,Ireland,https://www.pelidum.com/,"Online safety / trust & safety solutions: content moderation, compliance, regulation advisory; public-sector / NGO focus",Media & Messaging,,Y,Information Integrity / Disinformation,
17,FiscalNote,,United States,https://fiscalnote.com/,"AI-driven policy and regulatory intelligence, global legislative tracking, stakeholder management and advocacy tools",Research,,Y,Regulatory & Legislative Intelligence,
18,DSPolitical,,United States,https://www.dspolitical.com/,"Voter-targeted digital/ad tech for campaigns (connected TV, digital audio, programmatic political ads)",Media & Messaging,,Y,Ad Tech,
20,Future Shift Labs,,India,https://futureshiftlabs.com/,"Advisory & research on emerging technologies, AI policy, governance in tech–politics interface",Research,,Y,Emerging Tech & Governance Research,
24,eXplain,,France,https://www.explain.fr/,AI-startup focused on public-sector data and automating administrative/document workflows; founders previously created a campaign-tool used in European elections,Data Analytics and Modeling,,Y,,
25,Movement,,United Kingdom,https://www.yourmovement.org/,"Digital campaigning platform: CRM + email, SMS, WhatsApp, peer-to-peer, phone-banking for unions, NGOs and political groups",Volunteer Mobilisation,Voter Engagement,Y,,
26,Mailchimp,,United States,https://mailchimp.com/,"Email marketing platform; email automation, audience segmentation, landing pages, SMS integrations, analytics for nonprofits, small businesses, advocacy groups",Media & Messaging,,Y,Email and Automation,
31,TikTok,,China,https://www.tiktok.com/about?lang=en,Short-form video social media platform; user-generated content; influencer & content ecosystem; digital advertising & audience reach,Media & Messaging,,Y,,
32,Polit - X,,Germany,https://polit-x.de/en/,"Political monitoring & data platform: tracks federal/state/EU legislation, stakeholders, municipal data; provides alerts, analytics, search of public political documents",Data Analytics and Modeling,,Y,,
34,Political Watch,,Spain,https://politicalwatch.es/,"Civic-tech and advocacy organisation: developing tech for citizen oversight, open data, transparency & democratic participation",Civic Tech,,Y,Participation Tech?,
35,Say No To Disinfo,,United Kingdom,https://www.saynotodisinfo.com/,Evidence-informed counter-disinformation consultancy & tool-support: mining research studies + AI for narrative threat detection & response,Media & Messaging,,Y,Information Integrity / Disinformation,
36,Acquia,,United States,https://www.acquia.com/,"Digital experience platform: cloud-hosting, CMS/Drupal, content/data management, campaign/marketing automation, personalization for large institutions",Organisational Infrastructure,,Y,,
40,EuroSense,,Belgium,https://www.eurosense.eu/,"Europe-wide citizen science network using a tool called SenseMaker® to collect and analyse lived citizen experiences (stories) for policy makers, activists and governments — enabling more inclusive democratic engagement",Research,Participation Tech,Y,,
44,Trollrensics,,Netherlands,https://www.trollrensics.com/,Disinformation-forensics: software to track troll/fake-account networks on social media + research into coordinated campaigns,Media & Messaging,,Y,Information Integrity / Disinformation,
46,Eulytix,,Hungary,https://eulytix.eu/,"Big-data platform for European legislative amendments; tracks EU parliamentary activity, provides analytics for NGOs, researchers and lobbyists",Data Analytics and Modeling,,Y,Regulatory & Legislative Intelligence,
49,Digiknall GmbH,,Austria,https://www.digiknall.eu/,Social media campaigning agency,Media & Messaging,,Y,,
50,eKairos,,Germany,https://ekairos.net/,"Civic-tech / digital participation platform enabling large-scale, hybrid/asynchronous citizen engagement and bottom-up processes; uses AI to surface patterns and insights",Participation Tech,,Y,,
54,HubSpot,,United States,https://www.hubspot.com/,"All-in-one inbound marketing, sales and service CRM platform; includes marketing automation, social media management, data hub, content hub and AI enhancements",Media & Messaging,,Y,Marketing & Outreach,
56,Change.org,,United States,https://www.change.org/,"Online petition platform enabling citizens to launch campaigns, mobilise support, and influence decision-makers globally",Participation Tech,,Y,,
60,Appinio,,Germany,https://www.appinio.com/en/,"AI-powered market-research platform: real-time surveys, insights from millions of respondents across many markets",Research,,Y,,
63,Datack,,France,https://datack.com/,"Campaign & mobilisation consultancy (digital/PR agency for advocacy, electoral campaigns)",Voter Engagement,Volunteer Mobilisation,Y,,
64,Policy Insider AI,,Germany,https://policy-insider.ai/,AI-powered real-time policy monitoring & public affairs intelligence platform,Research,GovTech,Y,Regulatory & Legislative Intelligence,
65,Prismos,,Belgium,https://prismos.ai/,"AI-driven regulatory & public-policy monitoring platform: tracks reports, debates and agendas across jurisdictions, provides personalised policy intelligence",Research,GovTech,Y,Regulatory & Legislative Intelligence,
69,Voatz,,United States,https://voatz.com/,"Mobile/blockchain voting platform for elections, remote/overseas voting, ballots via smartphone/web",Voting Tech,,Y,,
70,Estratos,,Austria,https://www.estratos.eu/,"Tools and services (messaging, data, micro-fundraising, CRM) for political parties, NGOs and advocacy groups",Voter Engagement,Volunteer Mobilisation,Y,Marketing & Outreach,WinWithMe Direct Messaging Software
74,Cygnal,,United States,https://www.cygn.al/,"Political polling, public-opinion research, voter modelling & campaign-analytics",Research,Data Analytics and Modeling,Y,,
75,PoliMonitor,,United Kingdom,https://www.polimonitor.com/,"Real-time political monitoring & media/lobby-intelligence platform: tracks parliamentarians, debates, social & traditional media across multiple countries",Research,Regulatory & Legislative Intelligence,Y,,
76,deliberAIde,,Germany,https://www.deliberaide.com/,"AI-powered platform for facilitating deliberative dialogue (in-person, online, hybrid); includes transcription, anonymisation, clustering of ideas, insight reporting",Participation Tech,,Y,,
77,Battleground AI,,United States,https://www.battlegroundai.com/,"AI-generated political advertising (copy, creative workflow) for campaigns/agencies",Media & Messaging,,Y,,
79,OpSci.ai,,France,https://www.opsci.ai/fr,"AI-driven narrative & public-opinion analysis: collecting open/social data, mapping narratives, detecting informational risks and advising organisations",Research,,Y,,
81,LogiVote,,Israel,https://www.logivote.com/,"Campaign-management & digital voting platform: includes VRM (Voter Relationship Management), digital e-voting apps",Voting Tech,Voter Engagement,Y,,
84,Electica,,Ireland,https://electica.io/,"Digital targeting & advertising platform for progressive campaigns; self-serve tool "Advocate" for campaigners; multi-channel ad buy, audience targeting, compliance in Europe",Media & Messaging,,Y,,
86,SmartRaise,,United Kingdom,https://www.smartraise.net/,"Fundraising software platform: recurring donations, donor retention, automated upgrade workflows, campaign/NGO focused",Fundraising,,Y,,
87,Decision 21,,Czech Republic,https://www.decision21.com/,"Online civic participation platform: supports participatory budgeting, surveys, polls, contests & voting modules for cities, schools & organisations",Participation Tech,DelibTech,Y,,
89,NationBuilder,,United States,https://nationbuilder.com/,"CRM + campaign-platform for political campaigns, advocacy, nonprofits - includes supporter database, websites, outreach, fundraising, volunteer management",Voter Engagement,Volunteer Mobilisation,Y,,
96,Citipo,,France,https://citipo.com/fr,"All-in-one digital platform for activist organisations & campaigns: website builder, CRM for contacts, email/SMS outreach, online surveys/consultations, mobilization & measurement",Volunteer Mobilisation,Voter Engagement,Y,,
99,mySociety,,United Kingdom,https://www.mysociety.org/,"A civic-tech nonprofit building open-source platforms for citizen engagement, transparency, participatory democracy",Participation Tech,Organisational Infrastructure,Y,,
100,Zelos,,Estonia,https://getzelos.com/,"Volunteer management/mobile app for quick signup, team chat, task coordination, ideal for campaigns, non-profits, grassroots mobilisation",Volunteer Mobilisation,,Y,,
102,PREVENCY,,Germany,https://prevency.com/,"Offers "simulation and training software" for crisis scenarios, disinformation, cyberattacks, hybrid threats, etc.",Information Integrity / Disinformation,GovTech,Y,,InfoRange®
107,Meta,,USA,https://www.meta.com/,"Social-media platforms + advertising network (Facebook, Instagram, WhatsApp) & digital advertising infrastructure",Media & Messaging,,Y,Social Media,
108,CallHub,,USA,https://callhub.io/,"All-in-one campaign outreach & canvassing platform: phone banking, peer-to-peer texting, voice broadcasts, campaign workflows, SMS/voice/email, volunteer mobilisation & CRM integrations",Voter Engagement,Volunteer Mobilisation,Y,Marketing & Outreach,
109,Magic LEMP,,France,https://magic-lemp.com/en,"AI solutions focused on multimodal data (text, audio, image), including tools for monitoring political speech, disinformation and narratives (via its subsidiary "Pluralisme")",Media & Messaging,,Y,,
113,Facelift Brand Building Technologies GmbH,,Germany,https://facelift-bbt.com/en/,"A SaaS platform for enterprise social-media management, content planning & publishing, community management, multi-network campaigns, analytics - all within one workspace",Media & Messaging,,Y,Social Media Management,
114,Who Targets Me,,Ireland,https://whotargets.me/en/,"A browser extension + research platform that tracks political ads, targeting and spending by parties/advertisers in online platforms; supports transparency, analysis of digital campaign advertising",Media & Messaging,,Y,Ad Tech,
119,IDnow GmbH,,Germany,https://www.idnow.io,"Provides digital identity-verification (KYC/AML), e-signatures, document and biometric checks for enterprises",CivicTech,,Y,,
124,Go Vocal,,Belgium,https://www.govocal.com/,"Digital community engagement & participation platform (surveys, voting, participatory budgeting) for governments/municipalities",Participation Tech,,Y,DelibTech,
125,Make.org,,France,https://make.org/MD,Civic-tech platform enabling large-scale citizen consultation & deliberation; supports public institutions and NGOs to generate ideas & actions,Participation Tech,CivicTech,Y,DelibTech,
126,Delib Ltd,,United Kingdom,https://www.delib.net/,"Provides digital platforms for citizen engagement, consultations, budget simulations and public participation",Participation Tech,CivicTech,Y,DelibTech,Citizen Space/Simulator/Dialogue
128,Dembrane,,Netherlands,https://www.dembrane.com/en-US,"AI-driven stakeholder-engagement platform capturing live & async dialogue, turning unstructured input into structured insights",Participation Tech,CivicTech,Y,DelibTech,
129,Aristotle Inc.,,United States,https://www.aristotle.com/,"Political-campaign software & data: voter files, fundraising, compliance, analytics",Voter Engagement,Volunteer Mobilisation,Y,,
130,Lunda,,Austria,https://www.lundadonate.org/,Online donation-form & micro-fundraising software built for progressive movements; optimized for EU jurisdictions,Fundraising,,Y,,
132,Fundraise Up,,United States,https://fundraiseup.com/,"Online fundraising platform with AI-powered conversion, modern payment, donor engagement tools",Fundraising,,Y,,
133,Ecanvasser,,Ireland,https://www.ecanvasser.com/,"Field-canvassing & volunteer mobilisation platform: dashboards, mobile apps, walk lists, territory planning for campaigns",Voter Engagement,Volunteer Mobilisation,Y,,
134,Stateless,,Hungary,https://www.statelessworks.com/,Provides technology frameworks for parallel vote tabulation (PVT) and election-incident reporting for democratic monitoring,Voting Tech,,Y,,
136,Hootsuite,,Canada,https://www.hootsuite.com/,"Social-media management platform: scheduling, listening, analytics, multi-channel content",Media & Messaging,,,Social Media Management,
138,Qomon,,France,https://qomon.com/,"Volunteer & supporter mobilization platform with field-canvassing, CRM, territory analysis",Volunteer Mobilisation,Voter Engagement,Y,Marketing & Outreach,
139,SoundShape,,Netherlands,https://www.soundshape.eu/,"Provides AI-powered real-time subtitling, translation & captioning for events and video content in multilingual contexts.",Media & Messaging,,Y,,
141,openPetition,,Germany,https://www.openpetition.eu/,"Online platform for citizens' initiatives, petitions, signatures and debates aimed at increasing civic participation",Participation Tech,CivicTech,Y,,
142,Comitia,,Spain,https://www.scytl.com/,"Electronic voting, election modernization and results-consolidation systems",Voting Tech,,Y,,
146,Lomavis,,Germany,https://www.lomavis.com/,"Social media management platform (posting, analytics, content-cloud) for companies, agencies, brands & parties",Media & Messaging,,,Social Media Management,
148,Atlassian Corporation,,Australia,https://www.atlassian.com/,"Collaboration & productivity software (Jira, Confluence, Trello) for teams globally",Organisational Infrastructure,,Y,,
149,C6 Digital Ltd,,United Kingdom,https://c6digital.io/,"Advocacy-tech & digital mobilisation consultancy - builds bespoke apps, websites, data integrations for campaigns/NGOs",Organisational Infrastructure,,Y,,
152,Reset Tech,,United Kingdom,https://www.reset.tech/,Research & advocacy on digital media threats to democracy; builds tools for media/tech oversight,Media & Messaging,,Y,Information Integrity / Disinformation,
154,CrowdInsights GmbH,,Germany,https://crowdinsights.de/,"SaaS platform for structured citizen participation: surveys, idea-collections, participatory budgets",Participation Tech,CivicTech,Y,DelibTech,
157,TrollWall AI,,Slovakia,https://www.trollwall.ai/,AI-powered platform for comment/moderation on social media; automated removal of hate speech & toxic comments,Media & Messaging,,Y,Information Integrity / Disinformation,
161,Qela,,Ukraine,https://www.qela.app/,"Gamified community-builder SaaS for movements & campaigns: tasks, volunteer engagement, voting, leaderboards",Volunteer Mobilisation,Voter Engagement,Y,,
165,Civocracy,,Germany,https://www.civocracy.com/,"SaaS platform for citizen engagement: surveys, idea collection, collaborative decision-making & stakeholder dialogue for governments/organisations",Participation Tech,CivicTech,Y,DelibTech,
169,YouGov,,United Kingdom,https://yougov.com/,"Online panel research, public-opinion polling, data & analytics",Research,,Y,Opinion Research,
170,Digitale Box,,France,https://digitalebox.com/,All-in-one political campaign CRM and Citizen Request Management systems,Participation Tech,GovTech,Y,,
171,CamBuildr,,Austria,https://cambuildr.com/,"All-in-one campaigning SaaS: landing pages, emails, outreach, supporter DB, behaviour segmentation & automation",Voter Engagement,Volunteer Mobilisation,Y,,
172,POLYAS GmbH,,Germany,https://www.polyas.com/,"Secure online-voting platform for legally-binding elections, nominations & live-voting",Voting Tech,,Y,,
174,SAVOIRR,,Switzerland,https://www.savoirr.com/,A legislative-&-stakeholder-monitoring SaaS platform providing real-time EU policy tracking and stakeholder mapping,Research,,Y,Regulatory & Legislative Intelligence,
175,Demosquare,,Switzerland,https://demosquare.com/en/,"AI-powered SaaS platform for monitoring legislation, stakeholder signals & public affairs in Europe",Research,,Y,Regulatory & Legislative Intelligence`;

// Category mapping from CSV to UI display names
const categoryMapping: Record<string, string> = {
  'Media & Messaging': 'Messaging & Media',
  'Data Analytics and Modeling': 'Data Analytics & Modeling',
  'Volunteer Mobilisation': 'Volunteer & Activist Mobilization',
  'Voter Engagement': 'Voter Engagement',
  'Fundraising': 'Fundraising',
  'Research': 'Research',
  'Voting Tech': 'Voter Contact',
  'Organisational Infrastructure': 'Movement-Wide',
  'Participation Tech': 'Research',
  'Civic Tech': 'Research',
  'GovTech / Civic Infrastructure': 'Movement-Wide',
  'CivicTech': 'Research',
  'GovTech': 'Movement-Wide',
};

// Subcategory mapping
const subcategoryMapping: Record<string, string> = {
  'Information Integrity / Disinformation': 'Information Integrity',
  'Regulatory & Legislative Intelligence': 'Policy Research & Legislative Tracking',
  'Ad Tech': 'Digital Ad Targeting',
  'Email and Automation': 'Email & Direct Messaging',
  'Social Media': 'Social Networks',
  'Social Media Management': 'Social Networks',
  'Marketing & Outreach': 'Voter & Volunteer CRM',
  'Volunteer CRM': 'Volunteer Management',
  'DelibTech': 'Polling',
  'Opinion Research': 'Polling',
  'Emerging Tech & Governance Research': 'Policy Research & Legislative Tracking',
  'Participation Tech?': 'Polling',
};

export function parseCSVToEntities(): Entity[] {
  const lines = csvData.trim().split('\n');
  const entities: Entity[] = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    
    // Split by comma but handle commas within quotes
    const values: string[] = [];
    let current = '';
    let inQuotes = false;
    
    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        values.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    values.push(current.trim());

    // Extract values
    const entityName = values[1] || '';
    const logoUrl = values[2] || '';
    const hq = values[3] || '';
    const domain = values[4] || '';
    const description = values[5] || '';
    const mapBucket1 = values[6] || '';
    const mapBucket2 = values[7] || '';
    const relevanceFlag = values[8]?.trim().toUpperCase() === 'Y' ? 'Y' : 'N';
    const subBucket = values[9] || '';
    const toolsProducts = values[10] || '';

    // Only include entities with relevance flag Y and valid name
    if (relevanceFlag === 'Y' && entityName) {
      // Map categories to UI names
      const category = categoryMapping[mapBucket1] || mapBucket1 || 'Messaging & Media';
      const subcategory = subcategoryMapping[subBucket] || subBucket || '';

      entities.push({
        entityName,
        category,
        subcategory,
        logoUrl,
        websiteUrl: domain,
        hq,
        domain,
        description,
        relevanceFlag,
        mapBucket1,
        mapBucket2,
        subBucket,
        toolsProducts,
      });
    }
  }

  return entities;
}

// Export the parsed entities
export const csvEntities = parseCSVToEntities();
