import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState(null);

  const matches = [
    { 
      id: 1, 
      homeTeam: "Реал Мадрид", 
      awayTeam: "Барселона", 
      date: "18 августа", 
      time: "20:00", 
      status: "Скоро",
      stadium: "Сантьяго Бернабеу",
      attendance: "80,000",
      referee: "Антонио Матеу"
    },
    { 
      id: 2, 
      homeTeam: "Манчестер Юнайтед", 
      awayTeam: "Ливерпуль", 
      date: "19 августа", 
      time: "17:30", 
      status: "Скоро",
      stadium: "Олд Траффорд",
      attendance: "75,000",
      referee: "Майкл Оливер"
    },
    { 
      id: 3, 
      homeTeam: "Челси", 
      awayTeam: "Арсенал", 
      date: "17 августа", 
      time: "15:00", 
      score: "2-1", 
      status: "Завершен",
      stadium: "Стэмфорд Бридж",
      attendance: "40,000",
      referee: "Крэйг Полсон",
      goals: [
        { player: "Хаверц", team: "Челси", minute: 23 },
        { player: "Палмер", team: "Челси", minute: 67 },
        { player: "Одегор", team: "Арсенал", minute: 89 }
      ],
      possession: { home: 58, away: 42 },
      shots: { home: 12, away: 8 },
      corners: { home: 7, away: 4 }
    },
  ];

  const leagueTable = [
    { position: 1, team: "Реал Мадрид", games: 2, wins: 2, draws: 0, losses: 0, points: 6, form: ["W", "W"] },
    { position: 2, team: "Барселона", games: 2, wins: 1, draws: 1, losses: 0, points: 4, form: ["W", "D"] },
    { position: 3, team: "Манчестер Юнайтед", games: 2, wins: 1, draws: 0, losses: 1, points: 3, form: ["W", "L"] },
    { position: 4, team: "Ливерпуль", games: 2, wins: 1, draws: 0, losses: 1, points: 3, form: ["L", "W"] },
    { position: 5, team: "Челси", games: 2, wins: 0, draws: 1, losses: 1, points: 1, form: ["D", "L"] },
    { position: 6, team: "Арсенал", games: 2, wins: 0, draws: 0, losses: 2, points: 0, form: ["L", "L"] },
  ];

  const teams = [
    {
      name: "Реал Мадрид",
      coach: "Карло Анчелотти",
      founded: 1902,
      stadium: "Сантьяго Бернабеу",
      titles: 35,
      players: [
        { name: "Винисиус", position: "Нападающий", goals: 8 },
        { name: "Беллингем", position: "Полузащитник", goals: 6 },
        { name: "Модрич", position: "Полузащитник", goals: 2 }
      ]
    },
    {
      name: "Барселона",
      coach: "Хави Эрнандес",
      founded: 1899,
      stadium: "Камп Ноу",
      titles: 27,
      players: [
        { name: "Левандовски", position: "Нападающий", goals: 12 },
        { name: "Рафинья", position: "Полузащитник", goals: 4 },
        { name: "Гави", position: "Полузащитник", goals: 1 }
      ]
    }
  ];

  const news = [
    { id: 1, title: "Невероятная победа Реала в дерби", time: "2 часа назад", category: "Матчи", content: "Реал Мадрид одержал уверенную победу над Барселоной в напряженном матче, который прошел на Сантьяго Бернабеу. Винисиус открыл счет на 25-й минуте..." },
    { id: 2, title: "Новый трансфер изменит баланс сил", time: "5 часов назад", category: "Трансферы", content: "Манчестер Юнайтед близок к подписанию звездного полузащитника. Сумма трансфера может составить 80 миллионов евро..." },
    { id: 3, title: "Статистика игроков за прошедшую неделю", time: "1 день назад", category: "Статистика", content: "Анализ выступлений ключевых игроков лиги показал интересные тенденции. Лидеры по голам и передачам..." },
  ];

  const renderMatchDetails = (match) => (
    <Card className="border-dream-red/20 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-dream-red to-dream-red/80 text-white">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <Icon name="Zap" className="mr-3" size={28} />
            Детали матча
          </div>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setSelectedMatch(null)}
            className="text-white hover:bg-white/20"
          >
            <Icon name="X" size={20} />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center space-x-8 mb-4">
            <div className="text-center">
              <h3 className="text-2xl font-bold">{match.homeTeam}</h3>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-dream-red">
                {match.score || match.time}
              </div>
              <div className="text-sm text-muted-foreground">{match.status}</div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold">{match.awayTeam}</h3>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-lg flex items-center">
              <Icon name="MapPin" className="mr-2" size={20} />
              Информация о матче
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Стадион:</span>
                <span className="font-medium">{match.stadium}</span>
              </div>
              <div className="flex justify-between">
                <span>Посещаемость:</span>
                <span className="font-medium">{match.attendance}</span>
              </div>
              <div className="flex justify-between">
                <span>Судья:</span>
                <span className="font-medium">{match.referee}</span>
              </div>
            </div>
          </div>

          {match.goals && (
            <div className="space-y-4">
              <h4 className="font-semibold text-lg flex items-center">
                <Icon name="Target" className="mr-2" size={20} />
                Голы
              </h4>
              <div className="space-y-2">
                {match.goals.map((goal, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-muted/50 rounded">
                    <span className="font-medium">{goal.player}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-muted-foreground">{goal.team}</span>
                      <Badge variant="outline">{goal.minute}'</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {match.possession && (
          <div className="mt-6 space-y-4">
            <h4 className="font-semibold text-lg flex items-center">
              <Icon name="BarChart3" className="mr-2" size={20} />
              Статистика
            </h4>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-muted/50 rounded">
                <div className="text-2xl font-bold text-dream-green">{match.possession.home}%</div>
                <div className="text-xs text-muted-foreground">Владение мячом</div>
              </div>
              <div className="p-3 bg-muted/50 rounded">
                <div className="text-2xl font-bold text-dream-red">{match.shots.home}</div>
                <div className="text-xs text-muted-foreground">Удары</div>
              </div>
              <div className="p-3 bg-muted/50 rounded">
                <div className="text-2xl font-bold text-dream-gold">{match.corners.home}</div>
                <div className="text-xs text-muted-foreground">Угловые</div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );

  const renderTeamDetails = (team) => (
    <Card className="border-dream-green/20 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-dream-green to-dream-green/80 text-white">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <Icon name="Users" className="mr-3" size={28} />
            {team.name}
          </div>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setSelectedTeam(null)}
            className="text-white hover:bg-white/20"
          >
            <Icon name="X" size={20} />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Информация о клубе</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Тренер:</span>
                <span className="font-medium">{team.coach}</span>
              </div>
              <div className="flex justify-between">
                <span>Основан:</span>
                <span className="font-medium">{team.founded}</span>
              </div>
              <div className="flex justify-between">
                <span>Стадион:</span>
                <span className="font-medium">{team.stadium}</span>
              </div>
              <div className="flex justify-between">
                <span>Титулы:</span>
                <span className="font-medium text-dream-gold">{team.titles}</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Ключевые игроки</h4>
            <div className="space-y-2">
              {team.players.map((player, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-muted/50 rounded">
                  <div>
                    <div className="font-medium">{player.name}</div>
                    <div className="text-xs text-muted-foreground">{player.position}</div>
                  </div>
                  <Badge variant="outline">{player.goals} голов</Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderContent = () => {
    if (selectedMatch) {
      return renderMatchDetails(selectedMatch);
    }

    if (selectedTeam) {
      return renderTeamDetails(selectedTeam);
    }

    switch (activeSection) {
      case 'matches':
        return (
          <Card className="border-dream-red/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-dream-red to-dream-red/80 text-white">
              <CardTitle className="flex items-center text-2xl">
                <Icon name="Zap" className="mr-3" size={28} />
                Все матчи
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {matches.map((match) => (
                  <div 
                    key={match.id} 
                    className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-muted/50 to-transparent border hover:shadow-md transition-all duration-200 cursor-pointer"
                    onClick={() => setSelectedMatch(match)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="font-semibold text-lg">{match.homeTeam}</div>
                        <div className="text-sm text-muted-foreground">VS</div>
                        <div className="font-semibold text-lg">{match.awayTeam}</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">{match.date}</div>
                      <div className="font-bold text-lg">{match.score || match.time}</div>
                      <Badge variant={match.status === "Завершен" ? "secondary" : "default"} className="mt-1">
                        {match.status}
                      </Badge>
                    </div>
                    <Icon name="ChevronRight" className="text-muted-foreground" size={20} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );

      case 'teams':
        return (
          <div className="space-y-6">
            <Card className="border-dream-green/20 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-dream-green to-dream-green/80 text-white">
                <CardTitle className="flex items-center text-2xl">
                  <Icon name="Users" className="mr-3" size={28} />
                  Команды лиги
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {teams.map((team, index) => (
                    <div 
                      key={index}
                      className="p-4 border rounded-lg hover:shadow-md transition-all duration-200 cursor-pointer hover:border-dream-green/50"
                      onClick={() => setSelectedTeam(team)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-bold text-lg">{team.name}</h3>
                          <p className="text-sm text-muted-foreground">{team.coach}</p>
                          <p className="text-xs text-muted-foreground">{team.stadium}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-dream-gold">{team.titles} титулов</div>
                          <Icon name="ChevronRight" className="text-muted-foreground ml-auto" size={16} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-dream-green/20 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-dream-green to-dream-green/80 text-white">
                <CardTitle className="flex items-center text-2xl">
                  <Icon name="Trophy" className="mr-3" size={28} />
                  Турнирная таблица
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-12 text-center">#</TableHead>
                      <TableHead>Команда</TableHead>
                      <TableHead className="text-center">И</TableHead>
                      <TableHead className="text-center">В</TableHead>
                      <TableHead className="text-center">Н</TableHead>
                      <TableHead className="text-center">П</TableHead>
                      <TableHead className="text-center">Форма</TableHead>
                      <TableHead className="text-center font-bold">О</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {leagueTable.map((team) => (
                      <TableRow 
                        key={team.position} 
                        className="hover:bg-muted/30 transition-colors cursor-pointer"
                        onClick={() => {
                          const teamData = teams.find(t => t.name === team.team);
                          if (teamData) setSelectedTeam(teamData);
                        }}
                      >
                        <TableCell className="text-center font-bold">
                          {team.position <= 3 && (
                            <Badge variant="secondary" className="mr-1">
                              {team.position}
                            </Badge>
                          )}
                          {team.position > 3 && team.position}
                        </TableCell>
                        <TableCell className="font-semibold">{team.team}</TableCell>
                        <TableCell className="text-center">{team.games}</TableCell>
                        <TableCell className="text-center text-dream-green font-medium">{team.wins}</TableCell>
                        <TableCell className="text-center text-dream-gold font-medium">{team.draws}</TableCell>
                        <TableCell className="text-center text-dream-red font-medium">{team.losses}</TableCell>
                        <TableCell className="text-center">
                          <div className="flex space-x-1">
                            {team.form.map((result, index) => (
                              <Badge 
                                key={index} 
                                variant="outline" 
                                className={`w-6 h-6 p-0 text-xs ${
                                  result === 'W' ? 'bg-dream-green text-white' :
                                  result === 'D' ? 'bg-dream-gold text-white' :
                                  'bg-dream-red text-white'
                                }`}
                              >
                                {result}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell className="text-center font-bold text-lg">{team.points}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        );

      case 'news':
        return (
          <Card className="border-dream-gold/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-dream-gold to-dream-gold/80 text-dream-dark">
              <CardTitle className="flex items-center text-2xl">
                <Icon name="Newspaper" className="mr-3" size={28} />
                Все новости
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                {news.map((item) => (
                  <div key={item.id} className="border-b border-muted pb-4 last:border-b-0">
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-3">{item.content}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{item.time}</span>
                      <Badge variant="outline">{item.category}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );

      default:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Matches Section */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="border-dream-red/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-dream-red to-dream-red/80 text-white">
                  <CardTitle className="flex items-center text-2xl">
                    <Icon name="Zap" className="mr-3" size={28} />
                    Актуальные матчи
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {matches.slice(0, 3).map((match) => (
                      <div 
                        key={match.id} 
                        className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-muted/50 to-transparent border hover:shadow-md transition-all duration-200 cursor-pointer"
                        onClick={() => setSelectedMatch(match)}
                      >
                        <div className="flex items-center space-x-4">
                          <div className="text-center">
                            <div className="font-semibold text-lg">{match.homeTeam}</div>
                            <div className="text-sm text-muted-foreground">VS</div>
                            <div className="font-semibold text-lg">{match.awayTeam}</div>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-muted-foreground">{match.date}</div>
                          <div className="font-bold text-lg">{match.score || match.time}</div>
                          <Badge variant={match.status === "Завершен" ? "secondary" : "default"} className="mt-1">
                            {match.status}
                          </Badge>
                        </div>
                        <Icon name="ChevronRight" className="text-muted-foreground" size={20} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* League Table */}
              <Card className="border-dream-green/20 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-dream-green to-dream-green/80 text-white">
                  <CardTitle className="flex items-center text-2xl">
                    <Icon name="Trophy" className="mr-3" size={28} />
                    Турнирная таблица
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead className="w-12 text-center">#</TableHead>
                        <TableHead>Команда</TableHead>
                        <TableHead className="text-center">И</TableHead>
                        <TableHead className="text-center">В</TableHead>
                        <TableHead className="text-center">Н</TableHead>
                        <TableHead className="text-center">П</TableHead>
                        <TableHead className="text-center font-bold">О</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {leagueTable.map((team) => (
                        <TableRow 
                          key={team.position} 
                          className="hover:bg-muted/30 transition-colors cursor-pointer"
                          onClick={() => {
                            const teamData = teams.find(t => t.name === team.team);
                            if (teamData) setSelectedTeam(teamData);
                          }}
                        >
                          <TableCell className="text-center font-bold">
                            {team.position <= 3 && (
                              <Badge variant="secondary" className="mr-1">
                                {team.position}
                              </Badge>
                            )}
                            {team.position > 3 && team.position}
                          </TableCell>
                          <TableCell className="font-semibold">{team.team}</TableCell>
                          <TableCell className="text-center">{team.games}</TableCell>
                          <TableCell className="text-center text-dream-green font-medium">{team.wins}</TableCell>
                          <TableCell className="text-center text-dream-gold font-medium">{team.draws}</TableCell>
                          <TableCell className="text-center text-dream-red font-medium">{team.losses}</TableCell>
                          <TableCell className="text-center font-bold text-lg">{team.points}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* News */}
              <Card className="border-dream-gold/20 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-dream-gold to-dream-gold/80 text-dream-dark">
                  <CardTitle className="flex items-center text-xl">
                    <Icon name="Newspaper" className="mr-3" size={24} />
                    Последние новости
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    {news.map((item) => (
                      <div 
                        key={item.id} 
                        className="border-b border-muted pb-3 last:border-b-0 hover:bg-muted/30 p-2 rounded transition-colors cursor-pointer"
                        onClick={() => setActiveSection('news')}
                      >
                        <h4 className="font-semibold text-sm mb-1 line-clamp-2">{item.title}</h4>
                        <div className="flex justify-between items-center text-xs text-muted-foreground">
                          <span>{item.time}</span>
                          <Badge variant="outline" className="text-xs">{item.category}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="border-dream-red/20 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-dream-red to-dream-red/80 text-white">
                  <CardTitle className="flex items-center text-xl">
                    <Icon name="Target" className="mr-3" size={24} />
                    Быстрая статистика
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span className="text-sm font-medium">Всего голов</span>
                      <span className="text-2xl font-bold text-dream-red">127</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span className="text-sm font-medium">Матчей сыграно</span>
                      <span className="text-2xl font-bold text-dream-green">18</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span className="text-sm font-medium">Лучший бомбардир</span>
                      <div className="text-right">
                        <div className="font-semibold">Криштиану</div>
                        <div className="text-xs text-muted-foreground">12 голов</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Navigation */}
      <nav className="bg-dream-dark/95 backdrop-blur-sm border-b border-dream-red/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Trophy" className="text-dream-gold" size={32} />
              <h1 
                className="text-2xl font-bold text-white cursor-pointer"
                onClick={() => {
                  setActiveSection('home');
                  setSelectedMatch(null);
                  setSelectedTeam(null);
                }}
              >
                DREAM <span className="text-dream-red">LEAGUE</span>
              </h1>
            </div>
            <div className="hidden md:flex space-x-6">
              {[
                { name: "Главная", key: "home" },
                { name: "Матчи", key: "matches" },
                { name: "Команды", key: "teams" },
                { name: "Новости", key: "news" },
                { name: "Статистика", key: "stats" },
                { name: "Календарь", key: "calendar" }
              ].map((item) => (
                <Button 
                  key={item.key} 
                  variant="ghost" 
                  onClick={() => {
                    setActiveSection(item.key);
                    setSelectedMatch(null);
                    setSelectedTeam(null);
                  }}
                  className={`text-white hover:text-dream-red hover:bg-white/10 ${
                    activeSection === item.key ? 'text-dream-red bg-white/10' : ''
                  }`}
                >
                  {item.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {activeSection === 'home' && !selectedMatch && !selectedTeam && (
        <section className="relative bg-gradient-to-r from-dream-dark via-dream-charcoal to-dream-dark py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRjQ0NDQiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-6 animate-fade-in">
                DREAM LEAGUE
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in">
                Самая захватывающая футбольная лига
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
                <Button 
                  size="lg" 
                  className="bg-dream-red hover:bg-dream-red/90 text-white px-8 py-4 text-lg"
                  onClick={() => setActiveSection('calendar')}
                >
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Календарь матчей
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-dream-green text-dream-green hover:bg-dream-green hover:text-white px-8 py-4 text-lg"
                  onClick={() => setActiveSection('stats')}
                >
                  <Icon name="BarChart3" className="mr-2" size={20} />
                  Статистика
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {renderContent()}
      </div>

      {/* Footer */}
      <footer className="bg-dream-dark text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Trophy" className="text-dream-gold" size={24} />
                <span className="text-xl font-bold">DREAM LEAGUE</span>
              </div>
              <p className="text-gray-400">Самая захватывающая футбольная лига мира</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Лига</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="cursor-pointer hover:text-white" onClick={() => setActiveSection('teams')}>О лиге</li>
                <li className="cursor-pointer hover:text-white" onClick={() => setActiveSection('teams')}>Команды</li>
                <li className="cursor-pointer hover:text-white">Правила</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Матчи</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="cursor-pointer hover:text-white" onClick={() => setActiveSection('calendar')}>Календарь</li>
                <li className="cursor-pointer hover:text-white" onClick={() => setActiveSection('matches')}>Результаты</li>
                <li className="cursor-pointer hover:text-white" onClick={() => setActiveSection('stats')}>Статистика</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="cursor-pointer hover:text-white">Пресс-служба</li>
                <li className="cursor-pointer hover:text-white">Партнеры</li>
                <li className="cursor-pointer hover:text-white">Поддержка</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Dream League. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;