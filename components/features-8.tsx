import { Card, CardContent } from '@/components/ui/card'
import { Phone, MessageCircle, Combine } from 'lucide-react'

export function Features() {
    return (
        <section className="bg-gray-50 py-16 md:py-32 dark:bg-transparent">
            <div className="mx-auto max-w-3xl lg:max-w-5xl px-6">
                <div className="relative mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        <span className="text-[var(--brand-color-text)]">AI Solutions</span> for Your Business
                    </h2>
                </div>
                <div className="relative">
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="relative overflow-hidden rounded-none">
                            <CardContent className="pt-6">
                                <div className="relative flex justify-center mb-6">
                                    <div className="relative flex aspect-square size-16 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                                        <Phone className="m-auto size-8 text-[var(--brand-color-text)]" strokeWidth={1.5} />
                                    </div>
                                </div>
                                <div className="relative z-10 space-y-2 text-center">
                                    <h2 className="text-xl font-medium transition">AI Phone Agent</h2>
                                    <p className="text-foreground">Your personal service employee that speaks to your customers on the phone with a realistic voice. It handles calls 24/7, books appointments, answers questions, and provides consistent service.</p>
                                </div>
                            </CardContent>
                        </Card>
                        
                        <Card className="relative overflow-hidden rounded-none">
                            <CardContent className="pt-6">
                                <div className="relative flex justify-center mb-6">
                                    <div className="relative flex aspect-square size-16 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                                        <MessageCircle className="m-auto size-8 text-[var(--brand-color-text)]" strokeWidth={1.5} />
                                    </div>
                                </div>
                                <div className="relative z-10 space-y-2 text-center">
                                    <h2 className="text-xl font-medium transition">AI Chat Agent</h2>
                                    <p className="text-foreground">Your support agent for chat support on SMS, WhatsApp, and web. It professionally assists customers, books appointments, and answers questions instantly, capturing every opportunity 24/7.</p>
                                </div>
                            </CardContent>
                        </Card>
                        
                        <Card className="relative overflow-hidden rounded-none">
                            <CardContent className="pt-6">
                                <div className="relative flex justify-center mb-6">
                                    <div className="relative flex aspect-square size-16 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                                        <Combine className="m-auto size-8 text-[var(--brand-color-text)]" strokeWidth={1.5} />
                                    </div>
                                </div>
                                <div className="relative z-10 space-y-2 text-center">
                                    <h2 className="text-xl font-medium transition">AI Workflow Integration</h2>
                                    <p className="text-foreground">Integrate AI into your existing CRM and business workflows. Automate tedious tasks, enhance decision-making, and unlock efficiencies for smarter business processes.</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
