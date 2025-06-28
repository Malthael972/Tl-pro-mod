


// Тут части для удобства
var Items = {};
var Recipe = {};
var Conditions = {};

var isDebug = false;

var predefineItem = (id, nameEn, nameRu, tooltipEn, tooltipRu, tooltiptwoEn, tooltiptwoRu, isHidden) => { 
 nameEn = nameEn || '' 
 nameRu = nameRu || '' 
 tooltipEn = tooltipEn || '' 
 tooltipRu = tooltipRu || '' 
 tooltiptwoEn = tooltiptwoEn || '' 
 tooltiptwoRu = tooltiptwoRu || '' 
 Localization.addLocalization('ITEMNAME[' + id + ']=' + nameEn, true, isHidden); 
 Localization.addLocalization('ITEMNAME[' + id + ']=' + nameRu, false, isHidden); 
 Localization.addLocalization('TOOLTIP[' + id + ']=' + tooltipEn, true, isHidden); 
 Localization.addLocalization('TOOLTIP[' + id + ']=' + tooltipRu, false, isHidden); 
 Localization.addLocalization('TOOLTIPTWO[' + id + ']=' + tooltiptwoEn, true, isHidden); 
 Localization.addLocalization('TOOLTIPTWO[' + id + ']=' + tooltiptwoRu, false, isHidden); 
}
predefineItem(8192, 'Slime Hammer', 'Молот Слизней','Absorbed all the power of the slime king','Вся мощь короля слизней','','',false);
predefineItem(8193, 'Maximum Enery Blade', 'Клинок Максимальной Энергии','Mini power!','Малая сила!','','',false);
predefineItem(8194, 'Minor Managun', 'Малый Манамёт','Small but perfectly formed','Мал да удал','','',false);
predefineItem(8195, 'Skeleton Prime Core', 'Ядро Скелетрона Прайма','Looks ominous','Выглядит зловеще','10% increased damage to all weapons','10% к общему урону',false);
predefineItem(8196, 'Big Hunt Knife', 'Большой Охотничий Нож','','','','',false);
predefineItem(8197, 'Platinum Sickle', 'Платиновый Серп','','','','',false);
predefineItem(8198, 'True Flame', 'Истинное Пламя','His last master was burned alive','Его прошлый хозяин был сожжен','','',false);
predefineItem(8199, 'Golden AK-47', 'Золотой AK-47','I see you re very rich!','Я смотрю вы очень богаты!','','',false);
predefineItem(8200, 'Cry of the Ice Golem', 'Плач Ледяного Голема','He has an older brother...','У него есть старший брат...','','',false);
predefineItem(8201, 'Plantera Heart', 'Сердце Плантеры','Gives health regeneration faster than a regeneration bracelet','Дает регенерацию здоровья','6 defense','6 к защите',false);
predefineItem(8202, 'Cultist Hood', 'Шлем Культиста','Increases minion damage 11%','11% урона прислужникам','Set bonus: Increases minion damage 35% Increases your max number of minions','Бонус комплекта: 35% урона прислужников и +1 к прислужникам',false);
predefineItem(8203, 'Cultist Robe', 'Роба Культиста','Increases minion damage 11% Increases your max number of minions,','11% урона прислужников, +1 максимальному кол-ву прислужников,','Set bonus: Increases minion damage 35% Increases your max number of minions','Бонус комплекта: 35% урона прислужникам и 1 к прислужникам',false); 
predefineItem(8204, 'Cultist Boots', 'Сапоги Культиста','Increases minion damage 11% Increases your max number of minions,','11% урона прислужников, +1 максимальному кол-ву прислужников,','Set bonus: Increases minion damage 35% Increases your max number of minions','Бонус комплекта: 35% урона прислужникам и 1 к прислужникам',false);
predefineItem(8205, 'Mythril Reinforced Meteor Hood', 'Укрепленный Мифрилом Метеоритный Капюшон','16% increased magic damage 7% increased magic critical strike','16% к урону магическим оружием 6% шанс критического удара','Set bonus: -25% Mana Usage','Бонус комплекта: -25% расход маны',false);
predefineItem(8206, 'Mythril Reinforced Meteor Robe', 'Укрепленная Мифрилом Метеоритная Накидка','4% increased magic critical strike','4% шанс маг критического удара','Set bonus: -25% Mana Usage','Бонус комплекта: -25% расход маны',false);
predefineItem(8207, 'Mythril Reinforced Meteor Boots', 'Укрепленные Мифрилом Метеоритные Поножи','3% increased magic critical strike','3% шанс маг критического удара','Set bonus: -25% Mana Usage','Бонус комплекта: -25% расход маны',false);
predefineItem(8208, 'Ruby Reinforced Lead Helmet', 'Свинцовый Шлем с Рубином','','','','',false); 
predefineItem(8209, 'Ruby Reinforced Lead Robe', 'Свинцовый Нагрудник с Рубином','','','','',false);
predefineItem(8210, 'Ruby Reinforced Lead Boots', 'Свинцовые Боты с Рубином','','','','',false); 
predefineItem(8211, 'Precious Blade', 'Драгоценный Меч','You were little AKM?','Вам было мало Акм?','','',false);
predefineItem(8212, 'Precious Cobalt Naginata', 'Драгоценная Кобальтовая Нагината','You were?','Вам все еще мало?','','',false);
predefineItem(8213, 'Summoner Emblem', 'Эмблема Призывателя','You expected her?','Вы ждали её?','15% increased summon damage','15% урона прислужникам',false);
predefineItem(8214, 'Vampire Element', 'Элемент Вампира',"You're not human...",'Ты уже не человек...','','',false);
predefineItem(8215, 'Vampire Blade', 'Клинок Вампира','Heals in ranged and melee','Лечит в дальнем и ближнем бою','The legendary blade of Dracula','Клинок самого дракулы',false);
predefineItem(8216, 'Spectre Mushroom', 'Спектральный Гриб','Very useful!','Очень полезно!','','',false); 
predefineItem(8217, 'Spectre Shroomite Helmet', 'Спектральный Грибной Шлем','8% increased melee damage','8% урона в ближнем бою','Set bonus: 10% to running speed and regeneration speed','Бонус комплекта: 10% к скорости бега и регенерации',false);
predefineItem(8218, 'Spectre Shroomite Breastplate', 'Спектральный Грибной Нагрудник','9% melee damage and critical strike chance','9% к криту и урону в ближнем бою','Set bonus: 10% to running and regen speed','Бонус комплекта: 10% к скорости бега и регенерации',false);
predefineItem(8219, 'Spectre Shroomite Leggings', 'Спектральные Грибные Поножи','5% increased melee critical strike chance','5% крит урона в ближнем бою','Set bonus: 10% to running speed and regeneration speed','Бонус комплекта: 10% к скорости бега и регенерации',false); 
predefineItem(8220, 'Soul of Tranquility', 'Душа спокойствия','Soul of the sea','Душа моря','','',false);
predefineItem(8221, 'Poseidon', 'Посейдон','Threat level: island','Угроза уровень: остров','Effectively together with the armor from frosty scales','Рекомендовано к морозной чешуе',false);
predefineItem(8222, 'Spectral Sword', 'Спектральный меч','','','','',false);
predefineItem(8223, 'Dark Excalibur', 'Тёмный Экскалибур','The darkness is looking for you...','Тьма смотрит за тобой...','','',false);
predefineItem(8224, 'Flame Scythe', 'Пламенная Коса','To hell!','В пекло!','','',false);
predefineItem(8225, 'Fishron Scale', 'Чешуя Рыброна','','','','',false);
predefineItem(8226, 'Frost Scales Helmet', 'Шлем из Морозной Чешуи','25% increased ranged damage','25% к урону в дальнем бою','Set bonus: 8% increased movement speed attacks cause frostburn','Бонус комплекта: 8% скорости бега накладывает обморожение',false);
predefineItem(8227, 'Frost Scales Body', 'Накидка из Морозной Чешуи','15% increased ranged damage 20% chance to not consume ammo','15% к урону в дальнем бою 20% не потратить боеприпасы','Set bonus: 8% increased movement speed attacks cause frostburn','Бонус комплекта: 8% скорости бега накладывает обморожение',false);
predefineItem(8228, 'Frost Scales Leggings', 'Сапоги из Морозной Чешуи','12% increased ranged damage','12% к урону в дальнем бою','Set bonus: 8% increased movement speed attacks cause frostburn','Бонус комплекта: 8% скорости бега накладывает обморожение',false);
predefineItem(8229, 'True Frost brand', 'Истинная Ледяная Марка','Effective with frosty armor','Бонус от морозной брони','30% damage','30% к урону',false);
predefineItem(8230, 'Scythe of Pumpkin King', 'Коса Тыквенного Короля','','','','',false);
predefineItem(8231, 'Mushroom Enriched With chlorophy', 'Обогащенный Хлорофитом Гриб','Almost truffle','Почти трюфель','Gives iron skin for 45 sec','Использование накладывает железную кожу',false);
predefineItem(8232, 'Paranormal Activity', 'Паранормальное Явление','The pair Causes a rift of worlds and calls the spirits','Призывает духов','spectral shroom armor 40% crit attack','спектральная грибная броня дает 40% крита',false);
predefineItem(8233, 'Cobalt Reinforced Meteor Hood', 'Укрепленный Кобальтом Метеоритный Капюшон','15% increased magic critical strike','15% шанс маг критического удара','Set bonus: -18% Mana Usage','Бонус комплекта: -18% расход маны',false);
predefineItem(8234, 'Cobalt Reinforced Meteor Robe', 'Укрепленная Кобальтом Метеоритная Накидка ','6% increased magic critical strike','6% шанс маг критического удара','Set bonus: -18% Mana Usage','Бонус комплекта: -18% расход маны',false);
predefineItem(8235, 'Cobalt Reinforced Meteor Boots', 'Укрепленные Кобальтом Метеоритные Поножи','7% increased magic critical strike','7% шанс маг критического удара','Set bonus: -18% Mana Usage','Бонус комплекта: -18% расход маны',false);
predefineItem(8236, 'Ruby Reinforced Lead Helmet', 'Железный Шлем с Рубином','Set bonus:','Бонус комплекта:','8 defense','8 к защите',false); 
predefineItem(8237, 'Ruby Reinforced Lead Robe', 'Железный Нагрудник с Рубином','Set bonus:','Бонус комплекта:','8 defense','8 к защите',false);
predefineItem(8238, 'Ruby Reinforced Lead Boots', 'Железные Боты с Рубином','Set bonus:','Бонус комплекта:','8 defense','8 к защите',false); 
predefineItem(8239, 'Rainbow Blade', 'Радужный Клинок','HES A RAINBOW?','ОН РАДУЖНЫЙ?',' HE S ALSO A SWORD!','ОН ЕЩЕ И МЕЧ!',false); 
predefineItem(8240, 'Rainbow Pickaxe', 'Радужная Кирка','Pretty','Красивенько','','',false); 
predefineItem(8241, 'Frost Scales Shell', 'Панцирь Морозной Чешуи','20 ranged damage','20 к урону в дальнем бою','15 defense','15 к защите',false); 
predefineItem(8242, 'Green Magic Hat', 'Зелёная Магическая Шляпа','18% increased magic damage 5% increased magic critical strike','18% магическому урону 5% шанс критического удара','Set bonus: -18% Mana Usage','Бонус комплекта: -18% расход маны',false);
predefineItem(8243, 'Green Magic Robe', 'Зелёная Магическая Роба','8% increased magic damage and critical strike','8% к урону магическим оружием и шансу критического удара','Set bonus: -18% Mana Usage','Бонус комплекта: -18% расход маны',false);
predefineItem(8244, 'Magic Boots', 'Магические Сапоги','7 increased magic damage','7 к магическому урону','12% increased movement speed','12% скорости бега',false);
predefineItem(8245, 'Spectre Magic Boots', 'Спектральные Магические Сапоги','8 increased magic damage','8 к магическому урону','14% increased movement speed Chance to deal extra damage','14% скорости бега призраки наносят доп урон',false);
predefineItem(8246, 'Storm', 'Шторм','Precipitation is possible','Возможны осадки','Stuns','Ошеломляет',false); 
predefineItem(8247, 'Bloody Machete', 'Кровавая Мачете','Sharper not find','Острее не найти','Use accelerates regeneration','Использование ускоряет регенерацию',false);
predefineItem(8248, "Hood Of Hell's Wrath", 'Капюшон Адского Гнева','9% increased magic damage and critical strike','9% к урону магическим оружием и шансу критического удара','Set bonus: -15% Mana Usage and movement speed','Бонус комплекта: -15% расход маны и бегу',false); 
predefineItem(8249, "Body Of Hell's Wrath", 'Мантия Адского Гнева','13% increased magic damage and critical strike','13% к урону магическим оружием и шансу критического удара','Set bonus: -15% Mana Usage and movement speed','Бонус комплекта: -15% расход маны и бегу',false); 
predefineItem(8250, "Boots Of Hell's Wrath", 'Сапоги Адского Гнева','11% increased magic damage','11% к урону магическим оружием','Set bonus: -15% Mana Usage and movement speed','Бонус комплекта: -15% расход маны и бегу',false); 
predefineItem(8251, 'Hell Element', 'Адский Элемент','Too hot','Слишком горячо','','',false); 
predefineItem(8252, 'Soul of Fire', 'Душа пылкости','Soul of millions of lights','Душа миллионов огней','','',false);
predefineItem(8253, "Hell's Wrath Pickaxe", 'Кирка Адского Гнева','','','','',false);
predefineItem(8254, "Blade Of Hell's Wrath", 'Клинок Адского Гнева','','','','',false);
predefineItem(8255, 'The Wrath Of Hell', 'Адский Гнев','Set of infernal anger','Комплект адского гнева','Increases crit by 20%','Увеличивает крит на 20%',false); 
predefineItem(8256, "The Trident of hell's fires", 'Трезубец Адских Огней','Set of infernal anger','Комплект адского гнева','Increases damage by 14 and mana cost by 2','Увеличивает урон на 14 и затраты маны на 2',false); 
predefineItem(8257, "The Wrath Of The Devil", 'Гнев Дьявола','Created from magma and souls','Создан из магмы и душ','','',false); 
predefineItem(8258, 'Rotten Machete', 'Гнилая Мачете','Still sharp','Все так же острая','Use speeds up your run by 5%','Использование ускоряет бег на 5%',false); 
predefineItem(8259, "Zombie Flesh", "Плоть зомби","Is it contagious?","А это заразно?","","",false); 
predefineItem(8260, "Necromancer's Hood", 'Капюшон  Некроманта','Increases minion damage 3%','3% урона прислужникам','Set bonus: Increases minion damage 5% Increases your max number of minions','Бонус комплекта: 5% урона прислужников и 1 к прислужникам',false);
predefineItem(8261, "Necromancer's Robe", 'Роба Некроманта','Increases minion damage 4%,','4% урона прислужников','Set bonus: Increases minion damage 5% Increases your max number of minions','Бонус комплекта: 5% урона прислужникам и 1 к прислужникам',false); 
predefineItem(8262, "Necromancer's Boots", 'Сапоги Некроманта','Increases minion damage 3%,','3% урона прислужников','Set bonus: Increases minion damage 5% Increases your max number of minions','Бонус комплекта: 5% урона прислужникам и 1 к прислужникам',false);
predefineItem(8263, "Small Slime Staff", "Малый Посох Слизней","","","","",false); 
predefineItem(8264, "The Meteor Revolver", "Метеоритный Револьвер","Set meteor Shooter gives","Комлект метеоритного стрелка дает","2 damage","2 к урону",false);
predefineItem(8265, "Meteorite Shooter Helmet", "Шлем Метеоритного Стрелка","4% increased ranged damage","4% к урону в дальнем бою Бонус комплекта:","Set bonus: 19% chance not to consume ammo","19% не потратить патроны",false);
predefineItem(8266, "Meteorite Shooter Body", "Нагрудник Метеоритного Стрелка","5% increased ranged damage","5% к урону в дальнем бою Бонус комплекта:","Set bonus: 19% chance not to consume ammo","19% не потратить патроны",false);
predefineItem(8267, "Meteorite Shooter Boots", "Ботинки Метеоритного Стрелка","4% increased ranged damage","4% к урону в дальнем бою Бонус комплекта:","Set bonus: 19% chance not to consume ammo","19% не потратить патроны",false);
predefineItem(8268, "Fetid Baghnakhs", "Гниющие Когти","","","","",false);
predefineItem(8269, "Carrot", "Морковь","It is useful for the eyes!","Полезно для глаз!","","",false);
predefineItem(8270, "Carrot Sword", "Морковный Меч","","","","",false);
predefineItem(8271, "Carrot Helmet", "Морковный Шлем","","","","",false);
predefineItem(8272, "Carrot Body", "Морковный Нагрудник","","","","",false);
predefineItem(8273, "Carrot Boots", "Морковные Ботинки","","","","",false);
predefineItem(8274, "King Slime Artifact", "Артефакт Короля Слизней","2 defense if in Hotbar","2 к защите, если в хотбаре","","",false);
predefineItem(8275, "Mushroom Helmet", "Грибная Шляпа","Set bonus:","Бонус комплекта:","5% ranged damage and movement speed","5% к урону в дальнем бою и скорости передвижения",false);
predefineItem(8276, "Mushroom Body", "Грибной Нагрудник","Set bonus:","Бонус комплекта:","5% ranged damage and movement speed","5% к урону в дальнем бою и скорости передвижения",false);
predefineItem(8277, "Mushroom Boots", "Грибные Ботинки","Set bonus:","Бонус комплекта:","5% ranged damage and movement speed","5% к урону в дальнем бою и скорости передвижения",false);
predefineItem(8278, "Meteorite Shard", "Осколок Метеорита","Collected a lot of minerals","Собрал в себе множество минералов","","",false);
predefineItem(8279, "Wingman", "Ведомый","Install skulcrusher","Установите череполом","","",false);
predefineItem(8280, "Bonebow", "Костяной Лук","","","","",false); 
predefineItem(8281, "Usurper's Blade", "Клинок узурпатора","Periodically shoots fireball","Иногда стреляет фаерболом","","",false); 
predefineItem(8282, "Fiery Warlord Helmet", "Маска Пламенного Полководца","5% increased melee critical and damage strike chance","5% к урону и криту в ближнем бою","","",false); 
predefineItem(8283, "Fiery Warlord Body", "Нагрудник Пламенного Полководца","6% increased melee speed and 4% melee damage","6% к скорости","","4% к атаке ближнего боя",false);
predefineItem(8284, "Fiery Warlord Boots", "Поножи Пламенного Полководца","8% increased movement speed and melee damage","8% к скорости передвижения и урону в ближнего боя","","",false);
predefineItem(8285, "Scythe of Shadows", "Коса теней","Set the shadow mage of chaos","Комелект теневого мага хаоса дает","increases 23% damage 15% and crit Has 2 modes of attack to throw the change","23% к урону и 15 к криту Имеет 2 режима выкиньте для смены",false);
predefineItem(8286, "Chaos Shadow Mage Hood", "Капюшон Теневого Мага", "6% increased magic damage and critical strike Set bonus:","6% к магическому урону и шансу критического удара","Scythe of Shadows does not require mana","раскрывает Косу Теней",false); 
predefineItem(8287, "Chaos Shadow Mage Robe", "Роба Теневого Мага", "9% increased magic damage and critical strike Set bonus:","9% к магическому урону и шансу критического удара:","Scythe of Shadows does not require mana","раскрывает Косу Теней",false); 
predefineItem(8288, "Chaos Shadow Mage Boots", "Сапоги Теневого Мага", "8% increased magic damage Set bonus:","8% к маг урону","Scythe of Shadows does not require mana","раскрывает Косу Теней",false); 
predefineItem(8289, "Vampire Headgear", "Наголовник Вампира","5% melee damage and regen speed Set bonus: 50% movement speed","5% к урону и скорости регенерации Бонус комплекта: 50% к скорости передвижения","reveals Dracula's blade","раскрывает клинок Дракулы",false); 
predefineItem(8290, "Vampire Cape", "Накидка Вампира","7% melee damage and crit regen speed Set bonus: 50% movement speed","7% к урону и криту ближнего боя, скорости регенерации 50% к скорости передвижения","reveals Dracula's blade","раскрывает клинок Дракулы",false); 
predefineItem(8291, "Vampire Legs", "Ботинки Вампира","3% melee crit Set bonus: 50% movement speed","3% к криту ближнего боя Бонус комплекта:","reveals Dracula's blade","50% к скорости передвижения раскрывает клинок Дракулы",false); 
predefineItem(8292, "Skullcrusher", "Череполом","If in Hotbar","Если в хотбаре","15% damage Wingman","15% к урону с Ведомым",false); 
predefineItem(8293, 'Soul of Shadows', 'Душа теней','','','','',false);

//Пример predefineItem(8221, "", "","","","","",false); 








// Разрабы
predefineItem(16666, 'Semage Mask', "Маска Semage","Great for impersonating devs!",'Поможет вам выдать себя за разработчика!','',false);
predefineItem(17777, 'Semage Robe', "Роба Semage","Great for impersonating devs!",'Поможет вам выдать себя за разработчика!','',false);
predefineItem(19999, 'Semage Boots', "Сапоги Semage","Great for impersonating devs!",'Поможет вам выдать себя за разработчика!','',false);
predefineItem(16667, 'Cknight Head', 'Голова Cknight',"Great for impersonating devs!","Поможет вам выдать себя за разработчика!",'','',false);
predefineItem(16668, 'Cknight Body', 'Нагрудник Cknight',"Great for impersonating devs!","Поможет вам выдать себя за разработчика!",'','',false);
predefineItem(16669, 'Cknight Boots', 'Поножи Cknight',"Great for impersonating devs!","Поможет вам выдать себя за разработчика!",'','',false);
predefineItem(16674, 'Octodudes Head', 'Голова Осминога',"Great for impersonating devs!","Поможет вам выдать себя за разработчика!",'','',false);






// Регает предмет с данными параметрами
var registerItem = (id, baseId) => {
    var item = Item.init(id);
    item.setBaseItemId(baseId || 757)
    item.setProperty("shoot", 0); // Потому что по умолчанию стоит террамеч который стреляет своими прожектайлами.
    return item;
};
var setupItems = () => {
	Items.FishPole = registerItem(2289,2289)
    Items.slimeHammer = registerItem(8192,7);
    Items.maximumEnergyBlade = registerItem(8193,6);
    Items.littleManamet = registerItem(8194,157);
    Items.skeletonPrimeCore = registerItem(8195,935);
    Items.bigHuntKnife = registerItem(8196);
    Items.platinumSickle = registerItem(8197);
    Items.trueFlame = registerItem(8198);
    Items.goldenAK47 = registerItem(8199,98);
    Items.iceGoldemCry = registerItem(8200,98);
    Items.planteraCore = registerItem(8201,49);
    Items.cultistHelmet = registerItem(8202,727);
    Items.cultistRobe = registerItem(8203,728);
    Items.cultistBoots = registerItem(8204,729);
    Items.MythrilReinforcedMeteorHood = registerItem(8205,376);
    Items.MythrilReinforcedMeteorRobe = registerItem(8206,728);
    Items.MythrilReinforcedMeteorBoots = registerItem(8207,729);
    Items.RubyReinforcedLeadHelmet = registerItem(8208,727);
    Items.RubyReinforcedLeadRobe = registerItem(8209,728);
    Items.RubyReinforcedLeadBoots = registerItem(8210,729);
    Items.Preciousblade = registerItem(8211,368);
    Items.PreciousCobaltNaginata = registerItem(8212,550);
    Items.SummonerEmblem = registerItem(8213,490);
    Items.VampireElement = registerItem(8214,69);
    Items.VampireBlade = registerItem(8215);
    Items.SpectreMushroom = registerItem(8216,5);
    Items.SpectreShroomiteHelmet = registerItem(8217,727);
    Items.SpectreShroomiteBreastplate = registerItem(8218,728);
    Items.SpectreShroomiteLeggings = registerItem(8219,729);
    Items.SoulofTranquility = registerItem(8220,548);
    Items.Poseidon = registerItem(8221,2223);
    Items.SpectreSword = registerItem(8222,1506);
    Items.DarkExcalibur = registerItem(8223,1227);
    Items.FlameScythe = registerItem(8224,1327);
    Items.FishronScale = registerItem(8225,69);
    Items.FrostScalesHelmet = registerItem(8226,727);
    Items.FrostScalesBody = registerItem(8227,728);
    Items.FrostScalesLeggings = registerItem(8228,729);
    Items.TrueFrostbrand = registerItem(8229,676);
    Items.ScytheofPumpkinKing = registerItem(8230,1327);
    Items.Chloroshroom = registerItem(8231,5);
    Items.ParanormalActivity = registerItem(8232);
    Items.CobaltReinforcedMeteorHood = registerItem(8233,376);
    Items.CobaltReinforcedMeteorRobe = registerItem(8234,728);
    Items.CobaltReinforcedMeteorBoots = registerItem(8235,729);
    Items.RubyReinforcedIronHelmet = registerItem(8236,727);
    Items.RubyReinforcedIronRobe = registerItem(8237,728);
    Items.RubyReinforcedIronBoots = registerItem(8238,729);
    Items.RainbowBlade = registerItem(8239);
    Items.RainbowPickaxe = registerItem(8240,778);
    Items.FrostScalesShell = registerItem(8241,1253);
    Items.GreenMagicHat = registerItem(8242,727);
    Items.GreenMagicRobe = registerItem(8243,728);
    Items.MagicBoots = registerItem(8244,54);
    Items.SpectreMagicBoots = registerItem(8245,863);
    Items.Storm = registerItem(8246);
    Items.BloodyMachete = registerItem(8247);
    Items.HoodOfHellWrath = registerItem(8248,727);
    Items.BodyOfHellWrath = registerItem(8249,728);
    Items.BootsOfHellWrath = registerItem(8250,729);
    Items.HellElement = registerItem(8251,69);
    Items.SoulofFire = registerItem(8252,548);
    Items.HellWrathPickaxe = registerItem(8253,1506);
    Items.BladeOfHellWrath = registerItem(8254,121);
    Items.TheWrathOfHell = registerItem(8255,1266);
    Items.TheTridentofhellfires = registerItem(8256,1445);
    Items.TheWrathOfTheDevil = registerItem(8257,120);
    Items.RottenMachete = registerItem(8258);
    Items.ZombieFlesh = registerItem(8259,69);
    Items.NecromancerHood = registerItem(8260,727);
    Items.NecromancerRobe = registerItem(8261,728);
    Items.NecromancerBoots = registerItem(8262,729);
    Items.SmallSlimeStaff = registerItem(8263,1309);
    Items.TheMeteorRevolver = registerItem(8264,2269);
    Items.MeteoriteShooterHelmet = registerItem(8265,727);
    Items.MeteoriteShooterBody = registerItem(8266,728);
    Items.MeteoriteShooterBoots = registerItem(8267,729);
    Items.FetidBaghnakhs = registerItem(8268,1827);
    Items.Carrot = registerItem(8269,69);
    Items.CarrotSword = registerItem(8270,881);
    Items.CarrotHat = registerItem(8271,727);
    Items.CarrotBody = registerItem(8272,728);
    Items.CarrotBoots = registerItem(8273,729);
    Items.KingSlimeArtifact = registerItem(8274,216);
    Items.MushroomHat = registerItem(8275,727);
    Items.MushroomBody = registerItem(8276,728);
    Items.MushroomBoots = registerItem(8277,729);
    Items.MeteoriteShard = registerItem(8278,69);
    Items.Wingman = registerItem(8279,2269);
    Items.Bonebow = registerItem(8280,44);
    Items.UsurperBlade = registerItem(8281,121);
    Items.FieryWarlordHelmet = registerItem(8282,727);
    Items.FieryWarlordBody = registerItem(8283,728);
    Items.FieryWarlordBoots = registerItem(8284,729);
    Items.ShadowScythe = registerItem(8285,1327);
    Items.ChaosShadowMageHood = registerItem(8286,727);
    Items.ChaosShadowMageRobe = registerItem(8287,728);
    Items.ChaosShadowMageBoots = registerItem(8288,729);
    Items.VampireHeadgear = registerItem(8289,727);
    Items.VampireCape = registerItem(8290,728);
    Items.VampireLegs = registerItem(8291,729);
    Items.Skullcrusher = registerItem(8292,1301);
    Items.SoulofShadow = registerItem(8293,548);
    



    
    //Items.ChaosBloodMageHood = registerItem(xxxx,727);
    //Items.ChaosBloodMageRobe = registerItem(xxxx,728);
   //Items.ChaosBloodMageBoots = registerItem(xxxx,729);

 //Разрабы 
 Items.SemageMask = registerItem(16666,727);
 Items.SemageRobe = registerItem(17777,728);
 Items.SemageBoots = registerItem(19999,729);

 Items.CknightHead = registerItem(16667,727);
 Items.CknightBody = registerItem(16668,728);
 Items.CknightBoots = registerItem(16669,729);

 Items.MeyränsHood = registerItem(16670,727);
 Items.MeyränsBodice = registerItem(16672,728);
 Items.MeyränsTights = registerItem(16673,729);

 Items.OctodudesHead = registerItem(16674,727);

 //Костюмы 

  //Semage mask  
 Items.SemageMask.setTexture("Item_SemageMask.png");
 Items.SemageMask.setArmorParams("head", "armor_SemageMask.png", 222);
 Items.SemageMask.setProperty("rare", 7);
 var condSE = Item.addSetCondition(); 
 condSE.addConditionItem("head", 16666) 
 condSE.setProperty('add_minionDamage', 7); 
 
 //Semage robe
 Items.SemageRobe.setTexture("Item_SemageRobeTwo.png");
 Items.SemageRobe.setProperty("rare", 7);
 Items.SemageRobe.setArmorParams("body","armor_SemageRobe.png; overlay: armor_SemageArm.png", 222); 
 var condSEM = Item.addSetCondition(); 
 condSEM.addConditionItem("body", 17777) 
 condSEM.setProperty('add_minionDamage', 1); 
 condSEM.setProperty('add_minionCount', 6); 

 //Semage boots
 Items.SemageBoots.setTexture("Item_SemageBoots.png"); 
 Items.SemageBoots.setArmorParams("boots","Armor_SemageBoots.png", 222); 
 Items.SemageBoots.setProperty("rare", 7);
 var condSEMA = Item.addSetCondition(); 
 condSEMA.addConditionItem("Boots", 19999) 
 condSEMA.setProperty('add_minionDamage', 1); 
 condSEMA.setProperty('add_minionCount', 6); 

//Комплект 
 var condSEMAG = Item.addSetCondition(); 
 condSEMAG.addConditionItems("head: 16666; body: 17777; boots: 19999") 
 condSEMAG.setProperty('add_minionDamage', 1);
 condSEMAG.setProperty('add_minionCount', 6);



 //Cknight helmet
 Items.CknightHead.setTexture("CknightHelmet.png");
 Items.CknightHead.setArmorParams("head","Armor_CknightHelmet.png", 0);
 Items.CknightHead.setProperty("rare", 9); 
 Items.CknightHead.setProperty("vanity", 1);
 //Cknight body
 Items.CknightBody.setTexture("CknightBody.png");
 Items.CknightBody.setArmorParams("body","Armor_CknightBody.png; overlay: Armor_CknightArm.png", 0);
 Items.CknightBody.setProperty("rare", 9);
 Items.CknightBody.setProperty("vanity", 1);
 //Cknight boots
 Items.CknightBoots.setTexture("CknightBoots.png");
 Items.CknightBoots.setArmorParams("boots","Armor_CknightBoots.png", 0);
 Items.CknightBoots.setProperty("rare", 9);
 Items.CknightBoots.setProperty("vanity", 1);



 //OctodudesHead
 Items.OctodudesHead.setTexture("Item_OctodudesHead.png");
 Items.OctodudesHead.setArmorParams("head","Octodude_s_head.png", 0);
 Items.OctodudesHead.setProperty("rare", 9); 
 Items.OctodudesHead.setProperty("vanity", 1);

 //x
 Items.FishPole.setProperty("damage", 10);
 Items.FishPole.setProperty("shoot", 360);



    //Молот слизней.
    Items.slimeHammer.setProperty("damage", 10);
    Items.slimeHammer.setProperty("autoReuse", true);
    Items.slimeHammer.setProperty("hammer", 55);
    Items.slimeHammer.setProperty("knockback", 100);
    Items.slimeHammer.setProperty("useTime", 50);
    Items.slimeHammer.setProperty("value", 5);
    Items.slimeHammer.setProperty("rare", 1);
    Items.slimeHammer.setTexture('item_slimehammer.png');

    //Клинок Максимальной Энергии.
    Items.maximumEnergyBlade.setProperty("damage", 19);
    Items.maximumEnergyBlade.setProperty("autoReuse", true);
    Items.maximumEnergyBlade.setProperty("useTime", 5);
    Items.maximumEnergyBlade.setProperty("melee", true);
    Items.maximumEnergyBlade.setProperty("crit", 10);
    Items.maximumEnergyBlade.setProperty('useStyle', 3);
    Items.maximumEnergyBlade.setProperty("knockback", 2);
    Items.maximumEnergyBlade.setTexture('item_maxenblade.png');

    //Малый Манамёт.
    Items.littleManamet.setProperty("damage", 50);
    Items.littleManamet.setProperty("shoot", 22);
    Items.littleManamet.setProperty("magic", true);
    Items.littleManamet.setProperty("mana", 20);
    Items.littleManamet.setProperty("useStyle", 5);
    Items.littleManamet.setProperty("noMelee", true);
    Items.littleManamet.setTexture('item_littlemanamet.png');

    //Ядро Скелетрона Прайма.
    Items.skeletonPrimeCore.setProperty('accessory', true);
    Items.skeletonPrimeCore.setTexture('item_skeletronprimeeye.png');
    Items.skeletonPrimeCore.setProperty("material", false);
    Items.skeletonPrimeCore.setProperty("rare", 5);
    var conds = Item.addSetCondition();
    conds.addConditionItem("accessory", 8195);
    conds.setProperty('add_meleeDamage', 0.10);
    conds.setProperty('add_rangedDamage', 0.10);
    conds.setProperty('add_magicDamage', 0.10);
    conds.setProperty('add_minionDamage', 0.10);

    //Большой Охотничий Нож.
    Items.bigHuntKnife.setProperty("damage", 7);
    Items.bigHuntKnife.setProperty("autoReuse", true);
    Items.bigHuntKnife.setProperty("useTime", 6);
    Items.bigHuntKnife.setTexture("item_bighuntknife.png");

    //Платиновый Серп.
    Items.platinumSickle.setProperty("damage", 9);
    Items.platinumSickle.setProperty("autoReuse", true);
    Items.platinumSickle.setProperty("useTime", 6); 
    Items.platinumSickle.setTexture("item_platinumsickle.png");

    //Истинное Пламя.
    Items.trueFlame.setProperty("damage", 45);
    Items.trueFlame.setProperty("crit", 8);
    Items.trueFlame.setProperty("useTime", 16);
    Items.trueFlame.setProperty("useAnimation", 24);
    Items.trueFlame.setProperty("autoReuse", true);
    Items.trueFlame.setProperty("knockback", 100);
    Items.trueFlame.setTexture("item_trueflame.png");
    Items.trueFlame.setProperty("shoot", 15);
    Items.trueFlame.setProperty("material", false);
    Items.trueFlame.setProperty("flame", true);
    
    //Золотой AK47.
    Items.goldenAK47.setProperty("damage", 20);
    Items.goldenAK47.setProperty("useTime", 6);
    Items.goldenAK47.setProperty("ranged", true);
    Items.goldenAK47.setProperty("autoReuse", true);
    Items.goldenAK47.setProperty("knockback", 0);
    Items.goldenAK47.setProperty("shootSpeed", 4.3);
    Items.goldenAK47.setProperty("useAmmo", 14);
    Items.goldenAK47.setProperty("noMelee", true);
    Items.goldenAK47.setProperty("value", 30);
    Items.goldenAK47.setProperty("rare", 5);
    Items.goldenAK47.setProperty("shoot", 14);
    Items.goldenAK47.setTexture("item_goldenak47.png");
    Items.goldenAK47.setProperty("material", false);

    //Плач Ледяного Голема.
    Items.iceGoldemCry.setProperty("damage", 32);
    Items.iceGoldemCry.setProperty("useTime", 5);
    Items.iceGoldemCry.setProperty("ranged", true);
    Items.iceGoldemCry.setProperty("useStyle",5);
    Items.iceGoldemCry.setProperty("autoReuse", false);
    Items.iceGoldemCry.setProperty("knockback", 10);
    Items.iceGoldemCry.setProperty("shootSpeed", 8.6);
    Items.iceGoldemCry.setProperty("useAmmo", 14);
    Items.iceGoldemCry.setProperty("noMelee", true);
    Items.iceGoldemCry.setProperty("value", 50);
    Items.iceGoldemCry.setProperty("rare", 5);
    Items.iceGoldemCry.setProperty("shoot", 14);
    Items.iceGoldemCry.setTexture("item_icegolemcry.png");
    Items.iceGoldemCry.setProperty("material", false); 

    //Ядро Плантеры.
    Items.planteraCore.setProperty('accessory', true);
    Items.planteraCore.setTexture('item_planteracore.png');
    Items.planteraCore.setProperty("material", false);
    Items.planteraCore.setProperty("lifeRegen", 4);
    Items.planteraCore.setProperty("rare", 7);
    var conde = Item.addSetCondition();
    conde.addConditionItem("accessory", 8201);
    conde.setProperty('add_armor', 6);
    

     //Драгоценный меч.
    Items.Preciousblade.setProperty("damage", 100);
    Items.Preciousblade.setProperty("useTime", 15);
    Items.Preciousblade.setProperty("useAnimation", 24);
    Items.Preciousblade.setProperty("melee", true);
    Items.Preciousblade.setProperty("autoReuse", true);
    Items.Preciousblade.setProperty("knockback", 20);
    Items.Preciousblade.setTexture("Item_Preciousblade.png");
    Items.Preciousblade.setProperty("rare", 8);
    Items.Preciousblade.setProperty("material", false); 

    //Драгоценная кобальтовая нагината.
    Items.PreciousCobaltNaginata.setProperty("damage", 62);
    Items.PreciousCobaltNaginata.setProperty("useTime", 4);
    Items.PreciousCobaltNaginata.setProperty("useAnimation", 15);
    Items.PreciousCobaltNaginata.setProperty("autoReuse", true);
    Items.PreciousCobaltNaginata.setProperty("knockback", 13);
    Items.PreciousCobaltNaginata.setTexture("Item_PreciousCobaltNaginata.png");
    Items.PreciousCobaltNaginata.setProperty("shoot", 97);
    Items.PreciousCobaltNaginata.setProperty("rare", 8);
    Items.PreciousCobaltNaginata.setProperty("useStyle",5);
    Items.PreciousCobaltNaginata.setProperty("melee", true);
    Items.PreciousCobaltNaginata.setProperty("noMelee", true);
    Items.PreciousCobaltNaginata.setProperty("noUseGraphic", true);
    Items.PreciousCobaltNaginata.setProperty("material", false);

    //Эмблема призывателя 
    Items.SummonerEmblem.setProperty('accessory', true);
    Items.SummonerEmblem.setTexture('Item_summoner_emblem.png');
    Items.SummonerEmblem.setProperty("material", false);
    var conda = Item.addSetCondition();
    conda.addConditionItem("accessory", 8213);
    conda.setProperty('add_minionDamage', 0.15);
    conda.setProperty('add_meleeDamage', 0);

    //Элемент вампира 
    Items.VampireElement.setTexture("item_vampire_element.png");
    Items.VampireElement.setProperty("rare", 10);
    Items.VampireElement.setProperty("material", true);

    //Клинок вампира
    Items.VampireBlade.setProperty("damage", 40);
    Items.VampireBlade.setProperty("crit", 0);
    Items.VampireBlade.setProperty("melee", true);
    Items.VampireBlade.setProperty("useTime", 10);
    Items.VampireBlade.setProperty("useAnimation", 8);
    Items.VampireBlade.setProperty("autoReuse", true);
    Items.VampireBlade.setProperty("knockback", 5.75);
    Items.VampireBlade.setTexture("Item_vampire_blade.png");
    Items.VampireBlade.setProperty("shoot", 304);
    Items.VampireBlade.setProperty("material", false);
    Items.VampireBlade.setProperty("value", 3000000);
    Items.VampireBlade.setProperty("rare", 10);
    var condv = Item.addSetCondition(); 
    condv.addConditionItems("hand: 8215; head: 8289; body: 8290; boots: 8291") 
    condv.setProperty('regenAfterStrike', 1); 
    condv.setProperty('add_meleeCritChance', 8); 
    condv.setProperty('add_meleeDamage', 0.50); 

    //Спектральный гриб 
    Items.SpectreMushroom.setTexture("Item_spectre_mushroom.png");
    Items.SpectreMushroom.setProperty("rare", 6);
    Items.SpectreMushroom.setProperty("material", true); 
    Items.SpectreMushroom.setProperty("healLife", 110);

    //Душа сопкойствия 
    Items.SoulofTranquility.setTexture("Item_Soul_of_tranquility.png");

    //Посейдон 
    Items.Poseidon.setTexture("Item_Poseidon.png");
    Items.Poseidon.setProperty("useAmmo", 1);
    Items.Poseidon.setProperty("shoot", 120);
    Items.Poseidon.setProperty("value", 3000000);
    Items.Poseidon.setProperty("ranged", true);
    Items.Poseidon.setProperty("rare", 10);
    Items.Poseidon.setProperty("useTime", 10);
    Items.Poseidon.setProperty("useAnimation", 2);
    Items.Poseidon.setProperty("material", false); 
    Items.Poseidon.setProperty("damage", 80);
    Items.Poseidon.setProperty("crit", 10);
    var condy = Item.addSetCondition(); 
    condy.addConditionItems("hand: 8221; head: 8226; body: 8227; boots: 8228") 
    condy.setProperty('stealthMode', 1);

    //Спектральный меч 
    Items.SpectreSword.setProperty("damage", 75);
    Items.SpectreSword.setProperty("useTime", 35);
    Items.SpectreSword.setProperty("useAnimation", 20);
    Items.SpectreSword.setProperty("melee", true);
    Items.SpectreSword.setProperty("autoReuse", true);
    Items.SpectreSword.setProperty('useStyle', 1);
    Items.SpectreSword.setProperty("knockback", 6.75);
    Items.SpectreSword.setTexture("Item_spectre_sword.png");
    Items.SpectreSword.setProperty("shoot", 126);
    Items.SpectreSword.setProperty("shootSpeed", 5);
    Items.SpectreSword.setProperty("material", true);
    Items.SpectreSword.setProperty("pickaxe", false);
    Items.SpectreSword.setProperty("pick", false);
    Items.SpectreSword.setProperty("rare", 8); 

    //Темный Экскалибур 
    Items.DarkExcalibur.setProperty("damage", 50);
    Items.DarkExcalibur.setProperty("useTime", 35);
    Items.DarkExcalibur.setProperty("useAnimation", 11);
    Items.DarkExcalibur.setProperty("melee", true);
    Items.DarkExcalibur.setProperty("autoReuse", true);
    Items.DarkExcalibur.setProperty("knockback", 5);
    Items.DarkExcalibur.setTexture("Item_Dark_Excalibur.png");
    Items.DarkExcalibur.setProperty("shoot", 125);
    Items.DarkExcalibur.setProperty("shootSpeed", 7);
    Items.DarkExcalibur.setProperty("material", false);
    Items.DarkExcalibur.setProperty("rare", 8); 


    //Пламенная коса 
    Items.FlameScythe.setProperty("damage", 58); 
    Items.FlameScythe.setProperty("useTime", 50);
    Items.FlameScythe.setProperty("useAnimation", 15);
    Items.FlameScythe.setProperty("shootSpeed", 5);
    Items.FlameScythe.setProperty("autoReuse", true);
    Items.FlameScythe.setProperty("melee", true);
    Items.FlameScythe.setProperty("knockback", 4);
    Items.FlameScythe.setTexture("Item_Flame_Scythe.png");
    Items.FlameScythe.setProperty("shoot", 295);
    Items.FlameScythe.setProperty("material", false);
    Items.FlameScythe.setProperty("rare", 8); 
    Items.FlameScythe.setProperty("flame", true);
    Conditions.condsf = Item.addSetCondition();
    Conditions.condsf.addConditionItem("hand", 8224)

    //Чешуя рыброна 
    Items.FishronScale.setTexture("Item_FishronScale.png");
    Items.FishronScale.setProperty("rare", 4);
    Items.FishronScale.setProperty("material", true);

    //Истинная ледяная марка 
    Items.TrueFrostbrand.setProperty("damage", 52);
    Items.TrueFrostbrand.setProperty("useTime", 30);
    Items.TrueFrostbrand.setProperty("useAnimation", 12);
    Items.TrueFrostbrand.setProperty("melee", true);
    Items.TrueFrostbrand.setProperty("autoReuse", true);
    Items.TrueFrostbrand.setProperty("knockback", 4);
    Items.TrueFrostbrand.setTexture("Item_TrueFrostbrand.png");
    Items.TrueFrostbrand.setProperty("shoot", 337);
    Items.TrueFrostbrand.setProperty("shootSpeed", 9);
    Items.TrueFrostbrand.setProperty("material", false);
    Items.TrueFrostbrand.setProperty("rare", 8); 
    var condh = Item.addSetCondition(); 
    condh.addConditionItems("hand: 8229; head: 684; body: 685; boots: 686") 
    condh.setProperty('add_meleeDamage', 0.30);

    //Коса тыквенного короля
    Items.ScytheofPumpkinKing.setProperty("damage", 65); 
    Items.ScytheofPumpkinKing.setProperty("useTime", 40);
    Items.ScytheofPumpkinKing.setProperty("useAnimation", 10);
    Items.ScytheofPumpkinKing.setProperty("shootSpeed", 0);
    Items.ScytheofPumpkinKing.setProperty("autoReuse", true);
    Items.ScytheofPumpkinKing.setProperty("melee", true);
    Items.ScytheofPumpkinKing.setProperty("knockback", 8);
    Items.ScytheofPumpkinKing.setTexture("Item_ScytheofPumpkinKing.png");
    Items.ScytheofPumpkinKing.setProperty("shoot", 0);
    Items.ScytheofPumpkinKing.setProperty("material", false);
    Items.ScytheofPumpkinKing.setProperty("rare", 8); 

    //Хлорофитовый гриб 
    Items.Chloroshroom.setTexture("Item_Chloshroom.png");
    Items.Chloroshroom.setProperty("rare", 7);
    Items.Chloroshroom.setProperty("material", false); 
    Items.Chloroshroom.setProperty("healLife", 155);
    Items.Chloroshroom.setProperty("buffType", 5);
    Items.Chloroshroom.setProperty("buffTime", 3000); 

     //Паранормальное явление  
    Items.ParanormalActivity.setProperty("damage", 80);
    Items.ParanormalActivity.setProperty("useTime", 30);
    Items.ParanormalActivity.setProperty("useAnimation", 25);
    Items.ParanormalActivity.setProperty("melee", true);
    Items.ParanormalActivity.setProperty("autoReuse", true);
    Items.ParanormalActivity.setProperty("knockback", 7.75);
    Items.ParanormalActivity.setProperty("crit", 6);
    Items.ParanormalActivity.setTexture("Item_ParanormalActivity.png");
    Items.ParanormalActivity.setProperty("shoot", 297);
    Items.ParanormalActivity.setProperty("shootSpeed", 5);
    Items.ParanormalActivity.setProperty("material", false);
    Items.ParanormalActivity.setProperty("rare", 10); 
    Items.ParanormalActivity.setProperty("value", 3000000);
    var condp = Item.addSetCondition(); 
    condp.addConditionItems("hand: 8232; head: 8217; body: 8218; boots: 8219")  
    condp.setProperty('add_meleeCritChance', 40);

    //Радужный меч 
    Items.RainbowBlade.setProperty("damage", 50);
    Items.RainbowBlade.setProperty("useAnimation", 26);
    Items.RainbowBlade.setProperty("melee", true);
    Items.RainbowBlade.setProperty("autoReuse", true);
    Items.RainbowBlade.setProperty("knockback", 9);
    Items.RainbowBlade.setTexture("Item_RainbowBlade.png");
    Items.RainbowBlade.setProperty("material", false); 

    //Радужный кирка
    Items.RainbowPickaxe.setProperty("pick", 169);
    Items.RainbowPickaxe.setTexture("Item_RainbowPick.png");
    Items.RainbowPickaxe.setProperty("material", false); 
    Items.RainbowPickaxe.setProperty("melee", false);
    Items.RainbowPickaxe.setProperty("nomelee", true);
    Items.RainbowPickaxe.setProperty("crit", 2);
    
    //Панцырь морозной чешуи 
    Items.FrostScalesShell.setProperty('accessory', true);
    Items.FrostScalesShell.setTexture('Item_FrostScalesShell.png');
    Items.FrostScalesShell.setProperty("material", false);
    Items.FrostScalesShell.setProperty("rare", 8);
    Items.FrostScalesShell.addAccessoryTexture("back","Acc_FrostScalesShell.png");
    var condf = Item.addSetCondition();
    condf.addConditionItem("accessory", 8241);
    condf.setProperty('rangedDamage', 1.304);
    condf.setProperty('add_armor', 15)    

    //Магические сапоги
    Items.MagicBoots.setProperty('accessory', true);
    Items.MagicBoots.setTexture('Item_MageBoots.png');
    Items.MagicBoots.setProperty("material", true);
    Items.MagicBoots.setProperty("rare", 7);
    Items.MagicBoots.addAccessoryTexture("shoes","Acc_MageBoots.png");
    var condz = Item.addSetCondition();
    condz.addConditionItem("accessory", 8244);
    condz.setProperty('magicDamage', 1.12);
    condz.setProperty('movementSpeed', 14);


    //Магические сапоги
    Items.SpectreMagicBoots.setProperty('accessory', true);
    Items.SpectreMagicBoots.setTexture('Item_SpectreMageBoots.png'); 
    Items.SpectreMagicBoots.setProperty("material", false);
    Items.SpectreMagicBoots.setProperty("rare", 7);
    Items.SpectreMagicBoots.addAccessoryTexture("shoes","Acc_SpectreMageBoots.png");
    var condzf = Item.addSetCondition();
    condzf.addConditionItem("accessory", 8245);
    condzf.setProperty('magicDamageSplash', true);
    condzf.setProperty('movementSpeed', 16);
    condzf.setProperty('magicDamage', 1.14);
    
    //Шторм
    Items.Storm.setProperty("damage", 81); 
    Items.Storm.setProperty("useTime", 40);
    Items.Storm.setProperty("useAnimation", 14);
    Items.Storm.setProperty("autoReuse", true);
    Items.Storm.setProperty("melee", true);
    Items.Storm.setProperty("knockback", 3);
    Items.Storm.setProperty("crit", 14); 
    Items.Storm.setProperty("shoot", 405);
    Items.Storm.setTexture("Item_Storm.png");
    Items.Storm.setProperty("material", false);
    Items.Storm.setProperty("rare", 8); 
    Conditions.condst = Item.addSetCondition();
    Conditions.condst.addConditionItem("hand", 8246)

    //Кровавая мачете
    Items.BloodyMachete.setProperty("damage", 31); 
    Items.BloodyMachete.setProperty("useAnimation", 11);
    Items.BloodyMachete.setProperty("autoReuse", true);
    Items.BloodyMachete.setProperty("melee", true);
    Items.BloodyMachete.setProperty("knockback", 3);
    Items.BloodyMachete.setProperty("crit", 1); 
    Items.BloodyMachete.setTexture("Item_BloodyMachete.png");
    Items.BloodyMachete.setProperty("material", false);
    Items.BloodyMachete.setProperty("rare", 4); 
    var condb = Item.addSetCondition();
    condb.addConditionItem("hand", 8247)
    condb.setProperty('increaseRegen', 30);

     //Адский элемент
    Items.HellElement.setTexture("HellElement.png");
    Items.HellElement.setProperty("rare", 10);
    Items.HellElement.setProperty("material", true);

     //Душа Огня 
    Items.SoulofFire.setTexture("Item_SoulofFire.png");

    //Кирка адского гнева
    Items.HellWrathPickaxe.setProperty("pick", 215);
    Items.HellWrathPickaxe.setTexture("Item_Hell's Wrath Pickaxe.png");
    Items.HellWrathPickaxe.setProperty("material", false); 
    Items.HellWrathPickaxe.setProperty("melee", false);
    Items.HellWrathPickaxe.setProperty("damage", 35); 
    Items.HellWrathPickaxe.setProperty("useTime", 7);
    Items.HellWrathPickaxe.setProperty("nomelee", true);
    Items.HellWrathPickaxe.setProperty("crit", 5);
    Conditions.condsw1 = Item.addSetCondition();
    Conditions.condsw1.addConditionItem("hand", 8253)

    //Клинок адского гнева
    Items.BladeOfHellWrath.setProperty("damage", 82); 
    Items.BladeOfHellWrath.setProperty("useTime", 32);
    Items.BladeOfHellWrath.setProperty("useAnimation", 15);
    Items.BladeOfHellWrath.setProperty("autoReuse", true);
    Items.BladeOfHellWrath.setProperty("melee", true);
    Items.BladeOfHellWrath.setProperty("knockback", 5);
    Items.BladeOfHellWrath.setProperty("crit", 2); 
    Items.BladeOfHellWrath.setProperty("shoot", 34);
    Items.BladeOfHellWrath.setProperty("shootSpeed", 5.50);
    Items.BladeOfHellWrath.setTexture("Item_Blade Of Hell's Wrath.png");
    Items.BladeOfHellWrath.setProperty("material", false);
    Items.BladeOfHellWrath.setProperty("rare", 8); 
    Conditions.condsw2 = Item.addSetCondition();
    Conditions.condsw2.addConditionItem("hand", 8254)

    //Адский гнев
    Items.TheWrathOfHell.setProperty("damage", 76);
    Items.TheWrathOfHell.setProperty("shoot", 34);
    Items.TheWrathOfHell.setProperty("shootSpeed", 5)
    Items.TheWrathOfHell.setProperty("magic", true);
    Items.TheWrathOfHell.setProperty("mana", 11);
    Items.TheWrathOfHell.setProperty("useStyle", 5);
    Items.TheWrathOfHell.setProperty("useTime", 18);
    Items.TheWrathOfHell.setProperty("useAnimation", 18);
    Items.TheWrathOfHell.setProperty("noMelee", true);
    Items.TheWrathOfHell.setTexture('Item_The Wrath Of Hell.png');
    var condt = Item.addSetCondition(); 
    condt.addConditionItems("hand: 8255; head: 8248; body: 8249; boots: 8250")  
    condt.setProperty('magicCritChance', 20);

    Conditions.condsw3 = Item.addSetCondition();
    Conditions.condsw3.addConditionItem("hand", 8255)

    //Трезубец адских огней
    Items.TheTridentofhellfires.setProperty("damage", 70);
    Items.TheTridentofhellfires.setProperty("shoot", 295);
    Items.TheTridentofhellfires.setProperty("magic", true);
    Items.TheTridentofhellfires.setProperty("mana", 18);
    Items.TheTridentofhellfires.setProperty("useStyle", 5);
    Items.TheTridentofhellfires.setProperty("useTime", 26);
    Items.TheTridentofhellfires.setProperty("useAnimation", 26);
    Items.TheTridentofhellfires.setProperty("noMelee", true);
    Items.TheTridentofhellfires.setProperty("material", false);
    Items.TheTridentofhellfires.setTexture("Item_TheTrident of hell's fires.png");
    var conw = Item.addSetCondition(); 
    conw.addConditionItems("hand: 8256; head: 8248; body: 8249; boots: 8250")  
    conw.setProperty('magicDamage', 1.304);
    conw.setProperty('reduceManaUsage', 1.101);

    Conditions.condsw4 = Item.addSetCondition();
    Conditions.condsw4.addConditionItem("hand", 8256)
 
    //Лук адского гнева
    Items.TheWrathOfTheDevil.setTexture("Item_The Wrath Of The Devil.png");
    Items.TheWrathOfTheDevil.setProperty("useAmmo", 1);
    Items.TheWrathOfTheDevil.setProperty("shoot", 2);
    Items.TheWrathOfTheDevil.setProperty("value", 2000000);
    Items.TheWrathOfTheDevil.setProperty("ranged", true);
    Items.TheWrathOfTheDevil.setProperty("rare", 10);
    Items.TheWrathOfTheDevil.setProperty("useTime", 14);
    Items.TheWrathOfTheDevil.setProperty("useAnimation", 3);
    Items.TheWrathOfTheDevil.setProperty("material", false); 
    Items.TheWrathOfTheDevil.setProperty("damage", 69);
    Items.TheWrathOfTheDevil.setProperty("crit", 6);
    Items.TheWrathOfTheDevil.setProperty("buffType", 74); 
 
    Conditions.condsw5 = Item.addSetCondition();
    Conditions.condsw5.addConditionItem("hand", 8257)

    //Кровавая мачете
    Items.RottenMachete.setProperty("damage", 33); 
    Items.RottenMachete.setProperty("useAnimation", 11);
    Items.RottenMachete.setProperty("autoReuse", true);
    Items.RottenMachete.setProperty("melee", true);
    Items.RottenMachete.setProperty("knockback", 2.8);
    Items.RottenMachete.setProperty("crit", 1); 
    Items.RottenMachete.setTexture("Item_Rotten Machete.png");
    Items.RottenMachete.setProperty("material", false);
    Items.RottenMachete.setProperty("rare", 4); 
    var condr = Item.addSetCondition();
    condr.addConditionItem("hand", 8258)
    condr.setProperty('movementSpeed', 5);

    //Плоть зомби
    Items.ZombieFlesh.setTexture("Item_Zombie Flesh.png");
    Items.ZombieFlesh.setProperty("rare", 1);
    Items.ZombieFlesh.setProperty("material", true);

    //Посох малых слизней
    Items.SmallSlimeStaff.setTexture("Item_SmallSlimeStaff.png");
    Items.SmallSlimeStaff.setProperty("value", 1000);
    Items.SmallSlimeStaff.setProperty("summon", true);
    Items.SmallSlimeStaff.setProperty("rare", 2);
    Items.SmallSlimeStaff.setProperty("shoot", 266);
    Items.SmallSlimeStaff.setProperty("useTime", 28);
    Items.SmallSlimeStaff.setProperty("useAnimation", 28);
    Items.SmallSlimeStaff.setProperty("material", false); 
    Items.SmallSlimeStaff.setProperty("damage", 6);
    Items.SmallSlimeStaff.setProperty("crit", 2);
 
    //Метеоритный револьвер
    Items.TheMeteorRevolver.setProperty("damage", 21);
    Items.TheMeteorRevolver.setProperty("ranged", true);
    Items.TheMeteorRevolver.setProperty("autoReuse", true);
    Items.TheMeteorRevolver.setProperty("knockback", 3);
    Items.TheMeteorRevolver.setProperty("useAmmo", 14);
    Items.TheMeteorRevolver.setProperty("shoot", 14);
    Items.TheMeteorRevolver.setProperty("noMelee", true);
    Items.TheMeteorRevolver.setProperty("value", 3000);
    Items.TheMeteorRevolver.setProperty("rare", 3);
    Items.TheMeteorRevolver.setTexture("Item_The Meteor Revolver.png");
    Items.TheMeteorRevolver.setProperty("material", false);
    var conme = Item.addSetCondition(); 
    conme.addConditionItems("hand: 8264; head: 8265; body: 8266; boots: 8267")  
    conme.setProperty('add_rangedDamage', 0.15);
   
    //Гниющие когти
    Items.FetidBaghnakhs.setProperty("damage", 67);
    Items.FetidBaghnakhs.setProperty("autoReuse", true);
    Items.FetidBaghnakhs.setProperty("useAnimation", 6);
    Items.FetidBaghnakhs.setProperty("useTime", 6);
    Items.FetidBaghnakhs.setProperty("melee", true);
    Items.FetidBaghnakhs.setProperty("crit", 2);
    Items.FetidBaghnakhs.setProperty("knockback", 4.5);
    Items.FetidBaghnakhs.setTexture('Item_Fetid Baghnakhs.png');

    //Морковь
    Items.Carrot.setTexture("Carrot.png");
    Items.Carrot.setProperty("rare", 0);
    Items.Carrot.setProperty("material", true);

    //Морковный меч 

    Items.CarrotSword.setProperty("width", 28); 
    Items.CarrotSword.setProperty("height", 28);
    Items.CarrotSword.setProperty("damage", 10);
    Items.CarrotSword.setTexture('CarrotSword.png');

     //Морковь
    Items.KingSlimeArtifact.setTexture("King Slime Artifact.png");
    Items.KingSlimeArtifact.setProperty("rare", 0);
    Items.KingSlimeArtifact.setProperty("material", false);
    var condk = Item.addSetCondition();
    condk.addConditionItem("hotbar", 8274)
    condk.setProperty('add_armor', 2);

    //Осколок метеорита
    Items.MeteoriteShard.setTexture("MeteoriteShard.png");
    Items.MeteoriteShard.setProperty("rare", 3);
    Items.MeteoriteShard.setProperty("material", true);

    //Ведомый
    Items.Wingman.setProperty("damage", 110);
    Items.Wingman.setProperty("crit", 16);
    Items.Wingman.setProperty("ranged", true);
    Items.Wingman.setProperty("autoReuse", true);
    Items.Wingman.setProperty("useTime", 35);
    Items.Wingman.setProperty("useAnimation", 35);
    Items.Wingman.setProperty("knockback", 4);
    Items.Wingman.setProperty("autoReuse", true);
    Items.Wingman.setProperty("useAmmo", 14);
    Items.Wingman.setProperty("shoot", 14);
    Items.Wingman.setProperty("noMelee", true);
    Items.Wingman.setProperty("value", 30000);
    Items.Wingman.setProperty("rare", 8);
    Items.Wingman.setTexture("Wingman.png");
    Items.Wingman.setProperty("material", false);

    //Костяной лук
    Items.Bonebow.setTexture("Bonebow.png");
    Items.Bonebow.setProperty("useAmmo", 1);
    Items.Bonebow.setProperty("shoot", 1);
    Items.Bonebow.setProperty("rare", 3);
    Items.Bonebow.setProperty("damage", 15);

    //Клинок узурпатора 
    Items.UsurperBlade.setProperty("damage", 40);
    Items.UsurperBlade.setProperty("useTime", 80);
    Items.UsurperBlade.setProperty("rare", 4);
    Items.UsurperBlade.setProperty("useAnimation", 25);
    Items.UsurperBlade.setProperty("autoReuse", true);
    Items.UsurperBlade.setProperty("knockback", 3);
    Items.UsurperBlade.setTexture("Usurper's blade.png");
    Items.UsurperBlade.setProperty("shootSpeed", 1.8);
    Items.UsurperBlade.setProperty("shoot", 376);
    Items.UsurperBlade.setProperty("material", false);
    Items.UsurperBlade.setProperty("flame", true);

    Conditions.condsw6 = Item.addSetCondition();
    Conditions.condsw6.addConditionItem("hand", 8281)

    //Коса теней
    Items.ShadowScythe.setProperty("width", 60); 
    Items.ShadowScythe.setProperty("height", 56);
    Items.ShadowScythe.setProperty("damage", 60); 
    Items.ShadowScythe.setProperty("useTime", 23);
    Items.ShadowScythe.setProperty("useAnimation", 23);
    Items.ShadowScythe.setProperty("shootSpeed", 9.5);
    Items.ShadowScythe.setProperty("autoReuse", true);
    Items.ShadowScythe.setProperty("mana", 35);
    Items.ShadowScythe.setProperty("noMelee", true);
    Items.ShadowScythe.setProperty("knockback", 5);
    Items.ShadowScythe.setTexture("Shadow Scythe.png");
    Items.ShadowScythe.setProperty("material", false);
    Items.ShadowScythe.setProperty("rare", 8); 

    //Метеоритный револьвер
    Items.Skullcrusher.setProperty("value", 2000);
    Items.Skullcrusher.setProperty("rare", 8);
    Items.Skullcrusher.setTexture("Skullcrusher.png");
    Items.Skullcrusher.setProperty("material", false);
    var conme = Item.addSetCondition(); 
    conme.addConditionItems("hotbar: 8292; hand: 8279")  
    conme.setProperty('add_rangedDamage', 0.15);
    
    // Душа теней
   Items.SoulofShadow.setTexture("SoulofShadow.png");



    //Проджекты 

    //БРОНЯ 


//Для дебага 
if (isDebug) Callbacks.addCallback("tick", () => { 
Player.sendChatMessage(Player.getHealth(),255,255,255,1000 ); 
});


   //Шлем Культиста. 
 Items.cultistHelmet.setTexture("item_cultist_helmet.png");
 Items.cultistHelmet.setArmorParams("head", "armor_cultist_helmet.png", 7);
 Items.cultistHelmet.setProperty("rare", 8);
 var cond = Item.addSetCondition(); 
 cond.addConditionItem("head", 8202) 
 cond.setProperty('add_minionDamage', 0.11); 
 
 //Роба Культиста. 
 Items.cultistRobe.setTexture("item_cultist_robe.png"); 
 Items.cultistRobe.setArmorParams("body","armor_cultist_robe.png; overlay: armor_cultist_arm.png", 9); 
 Items.cultistRobe.setProperty("rare", 8);
 var cond1 = Item.addSetCondition(); 
 cond1.addConditionItem("body", 8203) 
 cond1.setProperty('add_minionDamage', 0.11); 
 cond1.setProperty('add_minionCount', 1); 

 //Сапоги Культиста. 
 Items.cultistBoots.setTexture("item_cultist_boots.png"); 
 Items.cultistBoots.setArmorParams("boots","armor_cultist_boots.png", 7); 
 Items.cultistBoots.setProperty("rare", 8);
 var cond2 = Item.addSetCondition(); 
 cond2.addConditionItem("Boots", 8204) 
 cond2.setProperty('add_minionDamage', 0.11); 
 cond2.setProperty('add_minionCount', 1); 

//Комплект 
 var cond3 = Item.addSetCondition(); 
 cond3.addConditionItems("head: 8202; body: 8203; boots: 8204") 
 cond3.setProperty('add_minionDamage', 0.35);
 cond3.setProperty('add_minionCount', 1); 




//Укрепленный Мифрилом Метеоритный Капюшон.
Items.MythrilReinforcedMeteorHood.setTexture("item_Mythril_Reinforced_Meteor_Hood.png");
Items.MythrilReinforcedMeteorHood.setArmorParams("head", "armor_Mythril_Reinforced_Meteor_Hood.png", 7);
Items.MythrilReinforcedMeteorHood.setProperty("rare", 5);
var cond4 = Item.addSetCondition();
cond4.addConditionItem("head", 8205)
cond4.setProperty('add_magicDamage', 0.16);
cond4.setProperty('add_magicCritChance', 7);

//Укрепленный Мифрилом Метеоритный Нагрудник.
Items.MythrilReinforcedMeteorRobe.setTexture("item_Mythril_Reinforced_Meteor_Robe.png");
Items.MythrilReinforcedMeteorRobe.setArmorParams("body","armor_Mythril_Reinforced_Meteor_Robe.png; overlay: armor_Mythril_Reinforced_Meteor_Arm.png", 10);
Items.MythrilReinforcedMeteorRobe.setProperty("rare", 5);
var cond5 = Item.addSetCondition();
cond5.addConditionItem("Body", 8206)
cond5.setProperty('add_magicCritChance', 4);

 //Укрепленный Мифрилом Метеоритные Поножи
 Items.MythrilReinforcedMeteorBoots.setTexture("item_Mythril_Reinforced_Meteor_Boots.png");
 Items.MythrilReinforcedMeteorBoots.setArmorParams("boots","armor_Mythril_Reinforced_Meteor_Boots.png", 8);
 Items.MythrilReinforcedMeteorBoots.setProperty("rare", 5);
 var cond5 = Item.addSetCondition();
 cond5.addConditionItem("Boots", 8207)
 cond5.setProperty('add_magicCritChance', 3);

//Комплект 
 var cond6 = Item.addSetCondition(); 
 cond6.addConditionItems("head: 8205; body: 8206; boots: 8207") 
 cond6.setProperty('add_reduceManaUsage', -0.25);




 //Укрепленный Рубином свинцовый Капюшон.
 Items.RubyReinforcedLeadHelmet.setTexture("item_Ruby_Reinforced_Lead_Helmet.png");
 Items.RubyReinforcedLeadHelmet.setArmorParams("head","armor_Ruby_Reinforced_Lead_Helmet.png", 5);
 Items.RubyReinforcedLeadHelmet.setProperty("rare", 1);

//Укрепленный Рубином свинцовый Нагрудник.
 Items.RubyReinforcedLeadRobe.setTexture("item_Ruby_Reinforced_Lead_Robe.png");
 Items.RubyReinforcedLeadRobe.setArmorParams("body","armor_Ruby_Reinforced_Lead_Robe.png; overlay: armor_Ruby_Reinforced_Lead_Arm.png", 6);
 Items.RubyReinforcedLeadRobe.setProperty("rare", 1);

 //Укрепленные Рубином свиноцовые Поножи
 Items.RubyReinforcedLeadBoots.setTexture("item_Ruby_Reinforced_Lead_Boots.png");
 Items.RubyReinforcedLeadBoots.setArmorParams("boots","armor_Ruby_Reinforced_Lead_Boots.png", 5);
 Items.RubyReinforcedLeadBoots.setProperty("rare", 1);




 //Спектральный Грибной Шлем
 Items.SpectreShroomiteHelmet.setTexture("Item_Spectre_Shroomite_Helmet.png");
 Items.SpectreShroomiteHelmet.setArmorParams("head", "Armor_Spectre_Shroomite_Helmet.png", 24);
 Items.SpectreShroomiteHelmet.setProperty("rare", 8);
 Items.SpectreShroomiteHelmet.setProperty("lifeRegen", 1);
 var cond7 = Item.addSetCondition(); 
 cond7.addConditionItem("head", 8217) 
 cond7.setProperty('add_meleeDamage', 0.08); 
 
 //Спектральный Грибной Нагрудник
 Items.SpectreShroomiteBreastplate.setTexture("Item_Spectre_Shroomite_Breastplate.png"); 
 Items.SpectreShroomiteBreastplate.setArmorParams("body","Armor_Spectre_Shroomite_Breastplate.png; overlay: Armor_Spectre_Shroomite_Arm.png", 31); 
 Items.SpectreShroomiteBreastplate.setProperty("rare", 8);
 Items.SpectreShroomiteBreastplate.setProperty("lifeRegen", 1);
 var cond8 = Item.addSetCondition(); 
 cond8.addConditionItem("body", 8218) 
 cond8.setProperty('add_meleeDamage', 0.09); 
 cond8.setProperty('add_meleeCritChance', 9); 
 
 //Спектральные Грибные Поножи
 Items.SpectreShroomiteLeggings.setTexture("item_Spectre_Shroomite_Leggings.png"); 
 Items.SpectreShroomiteLeggings.setArmorParams("boots","Armor_Spectre_Shroomite_Leggings.png", 20); 
 Items.SpectreShroomiteLeggings.setProperty("rare", 8);
 Items.SpectreShroomiteLeggings.setProperty("lifeRegen", 1);
 var cond9 = Item.addSetCondition(); 
 cond9.addConditionItem("Boots", 8219)  
 cond9.setProperty('add_meleeCritChance', 5);  

//Комплект 
 var cond10 = Item.addSetCondition(); 
 cond10.addConditionItems("head: 8217; body: 8218; boots: 8219")  
 cond10.setProperty('movementSpeed', 10); 



 //Шлем из Морозной Чешуи
 Items.FrostScalesHelmet.setTexture("Item_FrostScalesHelmet.png");
 Items.FrostScalesHelmet.setArmorParams("head", "Armor_FrostScalesHelmet.png", 12);
 Items.FrostScalesHelmet.setProperty("rare", 8);
 var cond11 = Item.addSetCondition(); 
 cond11.addConditionItem("head", 8226) 
 cond11.setProperty('add_rangedDamage', 0.25); 
 cond11.setProperty('add_rangedCritChance', 6); 
 
 //Нагрудник из Морозной Чешуи
 Items.FrostScalesBody.setTexture("Item_FrostScalesBody.png"); 
 Items.FrostScalesBody.setArmorParams("body","Armor_FrostScalesBody.png; overlay: Armor_FrostScalesArm.png", 23); 
 Items.FrostScalesBody.addAccessoryTexture("back","Armor_FrostScalesBack.png");
 Items.FrostScalesBody.setProperty("rare", 8);
 var cond12 = Item.addSetCondition(); 
 cond12.addConditionItem("body", 8227) 
 cond12.setProperty('add_rangedDamage', 0.15);
 cond12.setProperty('add_rangedCritChance', 15); 
 cond12.setProperty('add_ammoNotConsume', 20); 
 
 //Сапоги из Морозной Чешуи
 Items.FrostScalesLeggings.setTexture("item_FrostScalesLeggings.png"); 
 Items.FrostScalesLeggings.setArmorParams("boots","Armor_FrostScalesLeggings.png", 16); 
 Items.FrostScalesLeggings.setProperty("rare", 8);
 var cond13 = Item.addSetCondition(); 
 cond13.addConditionItem("Boots", 8228)  
 cond13.setProperty('add_rangedDamage', 0.12);
 cond13.setProperty('add_rangedCritChance', 15); 

//Комплект 
 Conditions.cond14 = Item.addSetCondition(); 
 Conditions.cond14.addConditionItems("head: 8226; body: 8227; boots: 8228") 
 Conditions.cond14.setProperty('movementSpeed', 8); 
 Conditions.cond14.setProperty('attackFrostburn', true);




   //Укрепленный Кобальтом Метеоритный Капюшон.
Items.CobaltReinforcedMeteorHood.setTexture("item_Cobalt_Reinforced_Meteor_Hood.png");
Items.CobaltReinforcedMeteorHood.setArmorParams("head", "Armor_Cobalt_Reinforced_Meteor_Hood.png", 7);
Items.CobaltReinforcedMeteorHood.setProperty("rare", 5);
var cond15 = Item.addSetCondition();
cond15.addConditionItem("head", 8233)
cond15.setProperty('add_magicCritChance', 15);

 //Укрепленный Кобальтом Метеоритный Нагрудник.
Items.CobaltReinforcedMeteorRobe.setTexture("Item_Cobalt_Reinforced_Meteor_Robe.png");
Items.CobaltReinforcedMeteorRobe.setArmorParams("body","armor_Cobalt_Reinforced_Meteor_Robe.png; overlay: armor_Cobalt_Reinforced_Meteor_Arm.png", 10);
Items.CobaltReinforcedMeteorRobe.setProperty("rare", 5);
var cond16 = Item.addSetCondition();
cond16.addConditionItem("Body", 8234)
cond16.setProperty('add_magicCritChance', 6);

 //Укрепленный Кобальтом Метеоритные Поножи
 Items.CobaltReinforcedMeteorBoots.setTexture("Item_Cobalt_Reinforced_Meteor_Boots.png");
 Items.CobaltReinforcedMeteorBoots.setArmorParams("boots","armor_Cobalt_Reinforced_Meteor_Boots.png", 8);
 Items.CobaltReinforcedMeteorBoots.setProperty("rare", 5);
 var cond17 = Item.addSetCondition();
 cond17.addConditionItem("Boots", 8235)
 cond17.setProperty('add_magicCritChance', 7);

 //Комплект 
 var cond18 = Item.addSetCondition(); 
 cond18.addConditionItems("head: 8233; body: 8234; boots: 8235") 
 cond18.setProperty('add_reduceManaUsage', -0.18);




 //Укрепленный Рубином железный Капюшон.
 Items.RubyReinforcedIronHelmet.setTexture("item_Ruby_Reinforced_Iron_Helmet.png");
 Items.RubyReinforcedIronHelmet.setArmorParams("head","armor_Ruby_Reinforced_Iron_Helmet.png", 3);
 Items.RubyReinforcedIronHelmet.setProperty("rare", 1);

 //Укрепленный Рубином железный Нагрудник.
 Items.RubyReinforcedIronRobe.setTexture("item_Ruby_Reinforced_Iron_Robe.png");
 Items.RubyReinforcedIronRobe.setArmorParams("body","armor_Ruby_Reinforced_Iron_Robe.png; overlay: armor_Ruby_Reinforced_Iron_Arm.png", 5);
 Items.RubyReinforcedIronRobe.setProperty("rare", 1);

 //Укрепленные Рубином железные Поножи
 Items.RubyReinforcedIronBoots.setTexture("item_Ruby_Reinforced_Iron_Boots.png");
 Items.RubyReinforcedIronBoots.setArmorParams("boots","armor_Ruby_Reinforced_Iron_Boots.png", 4);
 Items.RubyReinforcedIronBoots.setProperty("rare", 1);

 //Комплект 
 var cond19 = Item.addSetCondition(); 
 cond19.addConditionItems("head: 8236; body: 8237; boots: 8238") 
 cond19.setProperty('add_armor', 8);




//Зелёная Магическая шляпа
Items.GreenMagicHat.setTexture("Item_GreenMageHat.png");
Items.GreenMagicHat.setProperty("rare", 7);
Items.GreenMagicHat.setArmorParams("head","Armor_GreenMageHat.png", 7);
var cond20 = Item.addSetCondition();
cond20.addConditionItem("head", 8242) 
cond20.setProperty('add_magicDamage', 0.18);
cond20.setProperty('add_magicCritChance', 5);

//Зелёная магическая роба
Items.GreenMagicRobe.setTexture("Item_GreenMageRobe.png");
Items.GreenMagicRobe.setArmorParams("body","Armor_GreenMageBody.png; overlay: Armor_GreenMageArm.png", 17);
Items.GreenMagicRobe.setProperty("rare", 7);
var cond21 = Item.addSetCondition();
cond21.addConditionItem("Body", 8243)
cond21.setProperty('add_magicCritChance', 8);
cond21.setProperty('add_magicDamage', 0.08);

//Комплект 
 var cond22 = Item.addSetCondition(); 
 cond22.addConditionItems("head: 8242; body: 8243") 
 cond22.setProperty('add_reduceManaUsage', -0.18);





//Капюшон адского гнева
Items.HoodOfHellWrath.setTexture("Item_Hood Hell's Wrath.png");
Items.HoodOfHellWrath.setArmorParams("head", "Armor_Hood Hell's Wrath.png", 16);
Items.HoodOfHellWrath.setProperty("rare", 10);
var cond23 = Item.addSetCondition();
cond23.addConditionItem("head", 8248)
cond23.setProperty('add_magicDamage', 0.09);
cond23.setProperty('add_magicCritChance', 9);

//Мантия адского гнева
Items.BodyOfHellWrath.setTexture("Item_Breastplate Of Hell's Wrath.png");
Items.BodyOfHellWrath.setArmorParams("body","Armor_Breastplate Of Hell's Wrath.png; overlay: Armor_ArmOf Hell's Wrath.png", 19);
Items.BodyOfHellWrath.setProperty("rare", 10);
var cond24 = Item.addSetCondition();
cond24.addConditionItem("Body", 8249)
cond24.setProperty('add_magicDamage', 0.13);
cond24.setProperty('add_magicCritChance', 13);

 //Ботинки адского гнева
 Items.BootsOfHellWrath.setTexture("Item_Boots Of Hell's Wrath.png");
 Items.BootsOfHellWrath.setArmorParams("boots","Armor_Boots Of Hell's Wrath.png", 11);
 Items.BootsOfHellWrath.setProperty("rare", 10);
 var cond25 = Item.addSetCondition();
 cond25.addConditionItem("Boots", 8250)
 cond25.setProperty('add_magicDamage', 0.11);

//Комплект 
 Conditions.cond26 = Item.addSetCondition(); 
 Conditions.cond26.addConditionItems("head: 8248; body: 8249; boots: 8250") 
 Conditions.cond26.setProperty('add_reduceManaUsage', -0.15);
 Conditions.cond26.setProperty('movementSpeed', 15);




   //Капюшон некроманта 
 Items.NecromancerHood.setTexture("Item_Necromancer's Hood.png");
 Items.NecromancerHood.setArmorParams("head", "Armor_Necromancer's Hood.png", 3);
 Items.NecromancerHood.setProperty("rare", 2);
 var cond27 = Item.addSetCondition(); 
 cond27.addConditionItem("head", 8260) 
 cond27.setProperty('add_minionDamage', 0.03); 
 
 //Роба некроманта
 Items.NecromancerRobe.setTexture("Item_Necromancer's Robe.png"); 
 Items.NecromancerRobe.setArmorParams("body","Armor_Necromancer's Robe.png; overlay: Armor_Necromancer's Arm.png", 4); 
 Items.NecromancerRobe.setProperty("rare", 2);
 var cond28 = Item.addSetCondition(); 
 cond28.addConditionItem("body", 8261) 
 cond28.setProperty('add_minionDamage', 0.04);  

 //Сапоги некроманта 
 Items.NecromancerBoots.setTexture("Item_Necromancer's Boots.png"); 
 Items.NecromancerBoots.setArmorParams("boots","Armor_Necromancer's Boots.png", 3); 
 Items.NecromancerBoots.setProperty("rare", 2);
 var cond29 = Item.addSetCondition(); 
 cond29.addConditionItem("Boots", 8262) 
 cond29.setProperty('add_minionDamage', 0.03); 

//Комплект 
 var cond30 = Item.addSetCondition(); 
 cond30.addConditionItems("head: 8260; body: 8261; boots: 8262") 
 cond30.setProperty('add_minionDamage', 0.05);
 cond30.setProperty('add_minionCount', 1); 





//Шлем метеоритного стрелка
 Items.MeteoriteShooterHelmet.setTexture("Meteorite Shooter Helmet.png");
 Items.MeteoriteShooterHelmet.setArmorParams("head", "Armor_Meteorite Shooter Helmet.png", 4);
 Items.MeteoriteShooterHelmet.setProperty("rare", 2);
 var cond31 = Item.addSetCondition(); 
 cond31.addConditionItem("head", 8265) 
 cond31.setProperty('add_rangedDamage', 0.04); 

 //Нагрудник метеоритного стрелка
 Items.MeteoriteShooterBody.setTexture("Meteorite Shooter Body.png"); 
 Items.MeteoriteShooterBody.setArmorParams("body","Armor_Meteorite Shooter Body.png; overlay: Armor_Meteorite Shooter Arm.png", 5); 
 Items.MeteoriteShooterBody.setProperty("rare", 2);
 var cond32 = Item.addSetCondition(); 
 cond32.addConditionItem("body", 8266) 
 cond32.setProperty('add_rangedDamage', 0.05);
 
 //Сапоги метеоритного стрелка
 Items.MeteoriteShooterBoots.setTexture("Meteorite Shooter Boots.png"); 
 Items.MeteoriteShooterBoots.setArmorParams("boots","Armor_Meteorite Shooter Boots.png", 5); 
 Items.MeteoriteShooterBoots.setProperty("rare", 2);
 var cond33 = Item.addSetCondition(); 
 cond33.addConditionItem("Boots", 8267)  
 cond33.setProperty('add_rangedDamage', 0.04);

 //Комплект 
 var cond34 = Item.addSetCondition(); 
 cond34.addConditionItems("head: 8265; body: 8266; boots: 8267") 
 cond34.setProperty('add_ammoNotConsume', 19); 




 //Морковный шлем
 Items.CarrotHat.setTexture("CarrotHat.png");
 Items.CarrotHat.setArmorParams("head","armor_CarrotHat.png", 2);
 Items.CarrotHat.setProperty("rare", 0);

 //Морковный Нагрудник.
 Items.CarrotBody.setTexture("CarrotBody.png");
 Items.CarrotBody.setArmorParams("body","armor_CarrotBody.png; overlay: Armor_CarrotArm.png", 2);
 Items.CarrotBody.setProperty("rare", 0);

 //Морковные ботинки
 Items.CarrotBoots.setTexture("CarrotBoots.png");
 Items.CarrotBoots.setArmorParams("boots","armor_CarrotBoots.png", 1);
 Items.CarrotBoots.setProperty("rare", 0);





 //Грибной шлем
 Items.MushroomHat.setTexture("MushroomHat.png");
 Items.MushroomHat.setArmorParams("head","armor_MushroomHat.png", 1);
 Items.MushroomHat.setProperty("rare", 0);

 //Грибной Нагрудник.
 Items.MushroomBody.setTexture("MushroomBody.png");
 Items.MushroomBody.setArmorParams("body","armor_MushroomBody.png; overlay: armor_MushroomArm.png", 2);
 Items.MushroomBody.setProperty("rare", 0);

 //Грибные ботинки
 Items.MushroomBoots.setTexture("MushroomBoots.png");
 Items.MushroomBoots.setArmorParams("boots","armor_MushroomBoots.png", 1);
 Items.MushroomBoots.setProperty("rare", 0);

 //Комплект 
 var cond35 = Item.addSetCondition(); 
 cond35.addConditionItems("head: 8275; body: 8276; boots: 8277") 
 cond35.setProperty('add_rangedDamage', 0.05); 
 cond35.setProperty('movementSpeed', 5); 






 //Шлем пламенного полководца
 Items.FieryWarlordHelmet.setTexture("Fiery Warlord Helmet.png");
 Items.FieryWarlordHelmet.setArmorParams("head", "Armor_Fiery Warlord Helmet.png", 12);
 Items.FieryWarlordHelmet.setProperty("rare", 4);
 var cond36 = Item.addSetCondition(); 
 cond36.addConditionItem("head", 8282) 
 cond36.setProperty('add_meleeDamage', 0.05); 
 cond36.setProperty('add_meleeCritChance', 5);
 
 //Нагрудник пламенного полководца 
 Items.FieryWarlordBody.setTexture("Fiery Warlord Body.png"); 
 Items.FieryWarlordBody.setArmorParams("body","Armor_Fiery Warlord Body.png; overlay: Armor_Fiery Warlord Arm.png", 15); 
 Items.FieryWarlordBody.setProperty("rare", 4);
 var cond37 = Item.addSetCondition(); 
 cond37.addConditionItem("body", 8283) 
 cond37.setProperty('add_meleeDamage', 0.04); 
 cond37.setProperty('meleeSpeed', 1.06); 
 
 //Поножи пламенного полководца 
 Items.FieryWarlordBoots.setTexture("Fiery Warlord Boots.png"); 
 Items.FieryWarlordBoots.setArmorParams("boots","Armor_Fiery Warlord Boots.png", 12); 
 Items.FieryWarlordBoots.setProperty("rare", 4);
 Conditions.cond38 = Item.addSetCondition(); 
 Conditions.cond38.addConditionItem("Boots", 8284)  
 Conditions.cond38.setProperty('movementSpeed', 8); 
 Conditions.cond38.setProperty('add_meleeDamage', 0.08);

 





//Капюшон Теневого Мага хаоса
 Items.ChaosShadowMageHood.setTexture("Chaos Shadow Mage Hood.png");
 Items.ChaosShadowMageHood.setArmorParams("head", "Armor_Chaos Shadow Mage Hood.png", 15);
 Items.ChaosShadowMageHood.setProperty("rare", 8);
 var cond39 = Item.addSetCondition();
 cond39.addConditionItem("head", 8286)
 cond39.setProperty('add_magicDamage', 0.06);
 cond39.setProperty('add_magicCritChance', 6);

 //Мантия Теневого Мага хаоса
 Items.ChaosShadowMageRobe.setTexture("Chaos Shadow Mage Robe.png");
 Items.ChaosShadowMageRobe.setArmorParams("body","Armor_Chaos Shadow Mage Robe.png; overlay: Armor_Chaos Shadow Mage Arm.png", 16);
 Items.ChaosShadowMageRobe.setProperty("rare", 8);
 var cond40 = Item.addSetCondition();
 cond40.addConditionItem("Body", 8287)
 cond40.setProperty('add_magicDamage', 0.09);
 cond40.setProperty('add_magicCritChance', 9);

 //Ботинки Теневого Мага хаоса
 Items.ChaosShadowMageBoots.setTexture("Chaos Shadow Mage Boots.png");
 Items.ChaosShadowMageBoots.setArmorParams("boots","Armor_Chaos Shadow Mage Boots.png", 13);
 Items.ChaosShadowMageBoots.setProperty("rare", 8);
 var cond41 = Item.addSetCondition();
 cond41.addConditionItem("Boots", 8288)
 cond41.setProperty('add_magicDamage', 0.08);

 //Комплект 
 Conditions.cond42 = Item.addSetCondition(); 
 Conditions.cond42.addConditionItems("hand: 8285; head: 8286; body: 8287; boots: 8288") 
 Conditions.cond42.setProperty('add_reduceManaUsage', -1);
 Conditions.cond42.setProperty('add_meleeDamage', 0.23);
 Conditions.cond42.setProperty('add_meleeCritChance', 15);






 //Наголовник вампира 
 Items.VampireHeadgear.setTexture("VampireHeadgear.png");
 Items.VampireHeadgear.setArmorParams("head", "Armor_VampireHeadgear.png", 19);
 Items.VampireHeadgear.setProperty("rare", 8);
 Items.VampireHeadgear.setProperty("lifeRegen", 5);
 var cond42 = Item.addSetCondition(); 
 cond42.addConditionItem("head", 8289) 
 cond42.setProperty('add_meleeDamage', 0.05); 
 
 //Нагружник вампира
 Items.VampireCape.setTexture("VampireCape.png"); 
 Items.VampireCape.setArmorParams("body","Armor_VampireCape.png; overlay: Armor_VampireArm.png", 25); 
 Items.VampireCape.setProperty("rare", 8);
 Items.VampireCape.setProperty("lifeRegen", 7);
 var cond43 = Item.addSetCondition(); 
 cond43.addConditionItem("body", 8290) 
 cond43.setProperty('add_meleeDamage', 0.07); 
 cond43.setProperty('add_meleeCritChance', 7); 
 
 //Поножи вампира 
 Items.VampireLegs.setTexture("VampireLegs.png"); 
 Items.VampireLegs.setArmorParams("boots","Armor_VampireLegs.png", 18); 
 Items.VampireLegs.setProperty("rare", 8);
 Items.VampireLegs.setProperty("lifeRegen", 4);
 var cond44 = Item.addSetCondition(); 
 cond44.addConditionItem("Boots", 8291)  
 cond44.setProperty('add_meleeCritChance', 3);  

 //Комплект 
 Conditions.cond45 = Item.addSetCondition(); 
 Conditions.cond45.addConditionItems("head: 8289; body: 8290; boots: 8291")  
 Conditions.cond45.setProperty('movementSpeed', 50); 


    //print("ALL ITEMS DEFINED");


};
// Установка рецептов
var setupRecipes = () => {
    //Клинок Максимальной Энергии.
    Recipe.maximumEnergyBlade = Recipes.init(8193, 1);
    Recipe.maximumEnergyBlade.addIngredient(19, 7);
    Recipe.maximumEnergyBlade.addIngredient(179, 5);
    Recipe.maximumEnergyBlade.addIngredient(117, 10);
    Recipe.maximumEnergyBlade.setRequiredTile(16);
    Recipe.maximumEnergyBlade.add();

    //Малый Манамёт. 
    Recipe.littleManamet = Recipes.init(8194, 1);
    Recipe.littleManamet.addIngredient(109, 10);
    Recipe.littleManamet.addIngredient(381, 25);
    Recipe.littleManamet.addIngredient(324, 1);
    Recipe.littleManamet.setRequiredTile(134);
    Recipe.littleManamet.add();

    //Большой Охотничий Нож.
    Recipe.bigHuntKnife = Recipes.init(8196, 1);
    Recipe.bigHuntKnife.addIngredient(706, 7);
    Recipe.bigHuntKnife.setRequiredTile(16);
    Recipe.bigHuntKnife.add();

    //Платиновый Серп.
    Recipe.platinumSickle = Recipes.init(8197, 1);
    Recipe.platinumSickle.addIngredient(706, 6);
    Recipe.platinumSickle.addIngredient(182, 3);
    Recipe.platinumSickle.setRequiredTile(16);
    Recipe.platinumSickle.add();

    //Истинное Пламя
    Recipe.trueFlame = Recipes.init(8198, 1);
    Recipe.trueFlame.addIngredient(121, 1);
    Recipe.trueFlame.addIngredient(1570, 1);
    Recipe.trueFlame.addIngredient(482, 1);
    Recipe.trueFlame.setRequiredTile(26);
    Recipe.trueFlame.add();
    //Истинное Пламя альт
    Recipe.trueFlame = Recipes.init(8198, 1);
    Recipe.trueFlame.addIngredient(121, 1);
    Recipe.trueFlame.addIngredient(1570, 1);
    Recipe.trueFlame.addIngredient(1199, 1);
    Recipe.trueFlame.setRequiredTile(26);
    Recipe.trueFlame.add();

    //Золотой ak47
    Recipe.goldenAK47 = Recipes.init(8199, 1);
    Recipe.goldenAK47.addIngredient(434, 1);
    Recipe.goldenAK47.addIngredient(324, 1);
    Recipe.goldenAK47.addIngredient(73, 20);
    Recipe.goldenAK47.add();

    //Укрепленный Мифрилом Метеоритный Капюшон.
    Recipe.MythrilReinforcedMeteorHood = Recipes.init(8205, 1);
    Recipe.MythrilReinforcedMeteorHood.addIngredient(377, 1);
    Recipe.MythrilReinforcedMeteorHood.addIngredient(123, 1);
    Recipe.MythrilReinforcedMeteorHood.addIngredient(960, 1);
    Recipe.MythrilReinforcedMeteorHood.setRequiredTile(134);
    Recipe.MythrilReinforcedMeteorHood.add();

    //Укрепленный Мифрилом Метеоритный Нагрудник.
    Recipe.MythrilReinforcedMeteorRobe = Recipes.init(8206, 1);
    Recipe.MythrilReinforcedMeteorRobe.addIngredient(379, 1);
    Recipe.MythrilReinforcedMeteorRobe.addIngredient(124, 1);
    Recipe.MythrilReinforcedMeteorRobe.addIngredient(961, 1);
    Recipe.MythrilReinforcedMeteorRobe.setRequiredTile(134);
    Recipe.MythrilReinforcedMeteorRobe.add();

   //Укрепленные Мифрилом Метеоритовые Поножи.
    Recipe.MythrilReinforcedMeteorBoots = Recipes.init(8207, 1);
    Recipe.MythrilReinforcedMeteorBoots.addIngredient(380, 1);
    Recipe.MythrilReinforcedMeteorBoots.addIngredient(125, 1);
    Recipe.MythrilReinforcedMeteorBoots.addIngredient(962, 1);
    Recipe.MythrilReinforcedMeteorBoots.setRequiredTile(134);
    Recipe.MythrilReinforcedMeteorBoots.add();

    //Укрепленный Рубином свинцовый Капюшон.
    Recipe.RubyReinforcedLeadHelmet = Recipes.init(8208, 1);
    Recipe.RubyReinforcedLeadHelmet.addIngredient(690, 1);
    Recipe.RubyReinforcedLeadHelmet.addIngredient(178, 5);
    Recipe.RubyReinforcedLeadHelmet.add();

    //Укрепленный Рубином свинцовый Нагрудник.
    Recipe.RubyReinforcedLeadRobe = Recipes.init(8209, 1);
    Recipe.RubyReinforcedLeadRobe.addIngredient(691, 1);
    Recipe.RubyReinforcedLeadRobe.addIngredient(178, 15);
    Recipe.RubyReinforcedLeadRobe.add();

    //Укрепленные Рубином свиноцовые Поножи
    Recipe.RubyReinforcedLeadBoots = Recipes.init(8210, 1);
    Recipe.RubyReinforcedLeadBoots.addIngredient(692, 1);
    Recipe.RubyReinforcedLeadBoots.addIngredient(178, 5);
    Recipe.RubyReinforcedLeadBoots.add();

    //Драгоценный меч
    Recipe.Preciousblade = Recipes.init(8211, 1);
    Recipe.Preciousblade.addIngredient(1524, 10);
    Recipe.Preciousblade.addIngredient(1570, 1);
    Recipe.Preciousblade.addIngredient(368, 1);
    Recipe.Preciousblade.setRequiredTile(26);
    Recipe.Preciousblade.add();

    //Драгоценная кобальтовая нагината.
    Recipe.PreciousCobaltNaginata = Recipes.init(8212, 1);
    Recipe.PreciousCobaltNaginata.addIngredient(550, 1);
    Recipe.PreciousCobaltNaginata.addIngredient(537, 1);
    Recipe.PreciousCobaltNaginata.addIngredient(19, 10);
    Recipe.PreciousCobaltNaginata.addIngredient(177, 10);
    Recipe.PreciousCobaltNaginata.setRequiredTile(26);
    Recipe.PreciousCobaltNaginata.add();

    //Клинок вампира
    Recipe.VampireBlade = Recipes.init(8215, 1);
    Recipe.VampireBlade.addIngredient(8214, 3);
    Recipe.VampireBlade.addIngredient(1570, 1);
    Recipe.VampireBlade.addIngredient(1569, 1);
    Recipe.VampireBlade.addIngredient(8247, 1);
    Recipe.VampireBlade.setRequiredTile(26);
    Recipe.VampireBlade.add();

    //Спектральный гриб 
    Recipe.SpectreMushroom = Recipes.init(8216, 1); 
    Recipe.SpectreMushroom.addIngredient(183, 1);
    Recipe.SpectreMushroom.addIngredient(1508, 1);
    Recipe.SpectreMushroom.add();

    //Спектральный Грибной Шлем
    Recipe.SpectreShroomiteHelmet = Recipes.init(8217, 1);
    Recipe.SpectreShroomiteHelmet.addIngredient(1552, 12);
    Recipe.SpectreShroomiteHelmet.addIngredient(1006, 6);
    Recipe.SpectreShroomiteHelmet.addIngredient(8216, 6);
    Recipe.SpectreShroomiteHelmet.setRequiredTile(134);
    Recipe.SpectreShroomiteHelmet.add();

    //Спектральный Грибной Нагрудник
    Recipe.SpectreShroomiteBreastplate = Recipes.init(8218, 1);
    Recipe.SpectreShroomiteBreastplate.addIngredient(1552, 24);
    Recipe.SpectreShroomiteBreastplate.addIngredient(1006, 12);
    Recipe.SpectreShroomiteBreastplate.addIngredient(8216, 12);
    Recipe.SpectreShroomiteBreastplate.setRequiredTile(134);
    Recipe.SpectreShroomiteBreastplate.add();

    //Спектральные Грибные Поножи
    Recipe.SpectreShroomiteLeggings = Recipes.init(8219, 1);
    Recipe.SpectreShroomiteLeggings.addIngredient(1552, 18);
    Recipe.SpectreShroomiteLeggings.addIngredient(1006, 8);
    Recipe.SpectreShroomiteLeggings.addIngredient(8216, 8);
    Recipe.SpectreShroomiteLeggings.setRequiredTile(134);
    Recipe.SpectreShroomiteLeggings.add();
       
    //Посейдон 
    Recipe.Poseidon = Recipes.init(8221, 1);
    Recipe.Poseidon.addIngredient(2624, 1);
    Recipe.Poseidon.addIngredient(8220, 20);
    Recipe.Poseidon.addIngredient(2161, 5);
    Recipe.Poseidon.addIngredient(275, 5);
    Recipe.Poseidon.add();

    //Спектральный меч 
    Recipe.SpectreSword = Recipes.init(8222, 1);
    Recipe.SpectreSword.addIngredient(1508, 15);
    Recipe.SpectreSword.addIngredient(1006, 30);
    Recipe.SpectreSword.setRequiredTile(134);
    Recipe.SpectreSword.add();

    //Темный Эскалибур 
    Recipe.DarkExcalibur = Recipes.init(8223, 1);
    Recipe.DarkExcalibur.addIngredient(795, 1);
    Recipe.DarkExcalibur.addIngredient(1570, 1);
    Recipe.DarkExcalibur.addIngredient(521, 10);
    Recipe.DarkExcalibur.setRequiredTile(26);
    Recipe.DarkExcalibur.add();
    //Темный Экскалибур альт
    Recipe.DarkExcalibur = Recipes.init(8223, 1);
    Recipe.DarkExcalibur.addIngredient(46, 1);
    Recipe.DarkExcalibur.addIngredient(1570, 1);
    Recipe.DarkExcalibur.addIngredient(521, 10);
    Recipe.DarkExcalibur.setRequiredTile(26);
    Recipe.DarkExcalibur.add();

    //Пламенная коса
    Recipe.FlameScythe = Recipes.init(8224, 1);
    Recipe.FlameScythe.addIngredient(1327, 1);
    Recipe.FlameScythe.addIngredient(1445, 1);
    Recipe.FlameScythe.addIngredient(175, 10);
    Recipe.FlameScythe.addIngredient(117, 10);
    Recipe.FlameScythe.setRequiredTile(26);
    Recipe.FlameScythe.add();

    //Шлем из Морозной Чешуи
    Recipe.FrostScalesHelmet = Recipes.init(8226, 1);
    Recipe.FrostScalesHelmet.addIngredient(8225, 10);
    Recipe.FrostScalesHelmet.addIngredient(2161, 5);
    Recipe.FrostScalesHelmet.addIngredient(8220, 5);
    Recipe.FrostScalesHelmet.add();

    //Накидка из Морозной Чешуи
    Recipe.FrostScalesBody = Recipes.init(8227, 1);
    Recipe.FrostScalesBody.addIngredient(8225, 15);
    Recipe.FrostScalesBody.addIngredient(2161, 10);
    Recipe.FrostScalesBody.addIngredient(8220, 10);
    Recipe.FrostScalesBody.add();

    //Сапоги из Морозной Чешуи
    Recipe.FrostScalesLeggings = Recipes.init(8228, 1);
    Recipe.FrostScalesLeggings.addIngredient(8225, 10);
    Recipe.FrostScalesLeggings.addIngredient(2161, 5);
    Recipe.FrostScalesLeggings.addIngredient(8220, 5);
    Recipe.FrostScalesLeggings.add();

    //Истинная ледяная марка 
    Recipe.TrueFrostbrand = Recipes.init(8229, 1);
    Recipe.TrueFrostbrand.addIngredient(676, 1);
    Recipe.TrueFrostbrand.addIngredient(1570, 1);
    Recipe.TrueFrostbrand.addIngredient(2161, 5);
    Recipe.TrueFrostbrand.setRequiredTile(26);
    Recipe.TrueFrostbrand.add();

    //Хлорофитовый гриб 
    Recipe.Chloroshroom = Recipes.init(8231, 2); 
    Recipe.Chloroshroom.addIngredient(183, 2);
    Recipe.Chloroshroom.addIngredient(947, 10);
    Recipe.Chloroshroom.setRequiredTile(96);
    Recipe.Chloroshroom.add();

    //Паранормальное явление
    Recipe.ParanormalActivity = Recipes.init(8232, 1);
    Recipe.ParanormalActivity.addIngredient(8222, 1);
    Recipe.ParanormalActivity.addIngredient(1570, 1);
    Recipe.ParanormalActivity.addIngredient(8216, 15);
    Recipe.ParanormalActivity.addIngredient(575, 20);
    Recipe.ParanormalActivity.setRequiredTile(26);
    Recipe.ParanormalActivity.add();

    //Укрепленный Кобальтом Метеоритный Капюшон.
    Recipe.CobaltReinforcedMeteorHood = Recipes.init(8233, 1);
    Recipe.CobaltReinforcedMeteorHood.addIngredient(371, 1);
    Recipe.CobaltReinforcedMeteorHood.addIngredient(123, 1);
    Recipe.CobaltReinforcedMeteorHood.addIngredient(960, 1);
    Recipe.CobaltReinforcedMeteorHood.setRequiredTile(134);
    Recipe.CobaltReinforcedMeteorHood.add();

    //Укрепленный Кобальтом Метеоритный Нагрудник.
    Recipe.CobaltReinforcedMeteorRobe = Recipes.init(8234, 1);
    Recipe.CobaltReinforcedMeteorRobe.addIngredient(374, 1);
    Recipe.CobaltReinforcedMeteorRobe.addIngredient(124, 1);
    Recipe.CobaltReinforcedMeteorRobe.addIngredient(961, 1);
    Recipe.CobaltReinforcedMeteorRobe.setRequiredTile(134);
    Recipe.CobaltReinforcedMeteorRobe.add();

    //Укрепленные Кобальтом Метеоритовые Поножи.
    Recipe.CobaltReinforcedMeteorBoots = Recipes.init(8235, 1);
    Recipe.CobaltReinforcedMeteorBoots.addIngredient(375, 1);
    Recipe.CobaltReinforcedMeteorBoots.addIngredient(125, 1);
    Recipe.CobaltReinforcedMeteorBoots.addIngredient(962, 1);
    Recipe.CobaltReinforcedMeteorBoots.setRequiredTile(134);
    Recipe.CobaltReinforcedMeteorBoots.add();

    //Укрепленный Рубином Железный Капюшон.
    Recipe.RubyReinforcedIronHelmet = Recipes.init(8236, 1);
    Recipe.RubyReinforcedIronHelmet.addIngredient(90, 1);
    Recipe.RubyReinforcedIronHelmet.addIngredient(178, 5);
    Recipe.RubyReinforcedIronHelmet.add();

    //Укрепленный Рубином Железный Нагрудник.
    Recipe.RubyReinforcedIronRobe = Recipes.init(8237, 1);
    Recipe.RubyReinforcedIronRobe.addIngredient(81, 1);
    Recipe.RubyReinforcedIronRobe.addIngredient(178, 15);
    Recipe.RubyReinforcedIronRobe.add();

    //Укрепленные Рубином Железные Поножи
    Recipe.RubyReinforcedIronBoots = Recipes.init(8238, 1);
    Recipe.RubyReinforcedIronBoots.addIngredient(77, 1);
    Recipe.RubyReinforcedIronBoots.addIngredient(178, 5);
    Recipe.RubyReinforcedIronBoots.add();

    //Панцирь Морозной Чешуи
    Recipe.FrostScalesShell = Recipes.init(8241, 1);
    Recipe.FrostScalesShell.addIngredient(8225, 10);
    Recipe.FrostScalesShell.addIngredient(1328, 5);
    Recipe.FrostScalesShell.addIngredient(2161, 5);
    Recipe.FrostScalesShell.addIngredient(8220, 5);
    Recipe.FrostScalesShell.add();
    
    //Зеленая магическая шляпа
    Recipe.GreenMagicHat = Recipes.init(8242, 1);
    Recipe.GreenMagicHat.addIngredient(1739, 1);
    Recipe.GreenMagicHat.addIngredient(1006, 6);
    Recipe.GreenMagicHat.addIngredient(179, 5);
    Recipe.GreenMagicHat.addIngredient(502, 5);
    Recipe.GreenMagicHat.add();

    //Зеленая магическая роба
    Recipe.GreenMagicRobe = Recipes.init(8243, 1);
    Recipe.GreenMagicRobe.addIngredient(262, 1);
    Recipe.GreenMagicRobe.addIngredient(1006, 12);
    Recipe.GreenMagicRobe.addIngredient(179, 10);
    Recipe.GreenMagicRobe.addIngredient(502, 10);
    Recipe.GreenMagicRobe.add();

    //Магические сапоги
    Recipe.MagicBoots = Recipes.init(8244, 1);
    Recipe.MagicBoots.addIngredient(54, 1);
    Recipe.MagicBoots.addIngredient(1006, 5);
    Recipe.MagicBoots.addIngredient(179, 10);
    Recipe.MagicBoots.addIngredient(502, 5);
    Recipe.MagicBoots.addIngredient(109, 5);
    Recipe.MagicBoots.setRequiredTile(114);
    Recipe.MagicBoots.add();

    //Спектральные магические сапоги
    Recipe.SpectreMagicBoots = Recipes.init(8245, 1);
    Recipe.SpectreMagicBoots.addIngredient(8244, 1);
    Recipe.SpectreMagicBoots.addIngredient(1508, 10);
    Recipe.SpectreMagicBoots.setRequiredTile(114);
    Recipe.SpectreMagicBoots.add();

    //Шляпа волшебника 
    Recipe.MagHat = Recipes.init(1739, 1);
    Recipe.MagHat.addIngredient(225, 15);
    Recipe.MagHat.addIngredient(181, 10);
    Recipe.MagHat.addIngredient(182, 5);
    Recipe.MagHat.addIngredient(75, 2);
    Recipe.MagHat.setRequiredTile(86);
    Recipe.MagHat.add();

    //Кровавая мачете
    Recipe.BloodyMachete = Recipes.init(8247, 1);
    Recipe.BloodyMachete.addIngredient(1166, 1);
    Recipe.BloodyMachete.addIngredient(1329, 30);
    Recipe.BloodyMachete.addIngredient(521, 10);
    Recipe.BloodyMachete.add();

    //Капюшон адского гнева
    Recipe.HoodOfHellWrath = Recipes.init(8248, 1);
    Recipe.HoodOfHellWrath.addIngredient(175, 8);
    Recipe.HoodOfHellWrath.addIngredient(117, 6);
    Recipe.HoodOfHellWrath.addIngredient(8251, 6);
    Recipe.HoodOfHellWrath.addIngredient(1332, 8);
    Recipe.HoodOfHellWrath.addIngredient(8252, 8);
    Recipe.HoodOfHellWrath.add();

    //Мантия адского гнева
    Recipe.BodyOfHellWrath = Recipes.init(8249, 1);
    Recipe.BodyOfHellWrath.addIngredient(175, 12);
    Recipe.BodyOfHellWrath.addIngredient(117, 10);
    Recipe.BodyOfHellWrath.addIngredient(8251, 10);
    Recipe.BodyOfHellWrath.addIngredient(1332, 12);
    Recipe.BodyOfHellWrath.addIngredient(8252, 12);
    Recipe.BodyOfHellWrath.add();

    //Ботинки адского гнева
    Recipe.BootsOfHellWrath = Recipes.init(8250, 1);
    Recipe.BootsOfHellWrath.addIngredient(175, 10);
    Recipe.BootsOfHellWrath.addIngredient(117, 8);
    Recipe.BootsOfHellWrath.addIngredient(8251, 8);
    Recipe.BootsOfHellWrath.addIngredient(1332, 10);
    Recipe.BootsOfHellWrath.addIngredient(8252, 10);
    Recipe.BootsOfHellWrath.add();

    //Кирка адского гнева
    Recipe.HellWrathPickaxe = Recipes.init(8253, 1);
    Recipe.HellWrathPickaxe.addIngredient(122, 1);
    Recipe.HellWrathPickaxe.addIngredient(117, 6);
    Recipe.HellWrathPickaxe.addIngredient(8251, 4);
    Recipe.HellWrathPickaxe.addIngredient(1332, 6);
    Recipe.HellWrathPickaxe.addIngredient(8252, 5);
    Recipe.HellWrathPickaxe.add();

    //Клинок адского гнева
    Recipe.BladeOfHellWrath = Recipes.init(8254, 1);
    Recipe.BladeOfHellWrath.addIngredient(121, 1);
    Recipe.BladeOfHellWrath.addIngredient(117, 8);
    Recipe.BladeOfHellWrath.addIngredient(8251, 6);
    Recipe.BladeOfHellWrath.addIngredient(1332, 8);
    Recipe.BladeOfHellWrath.addIngredient(8252, 6);
    Recipe.BladeOfHellWrath.add();

     //Адский гнев
    Recipe.TheWrathOfHell = Recipes.init(8255, 1);
    Recipe.TheWrathOfHell.addIngredient(531, 1);
    Recipe.TheWrathOfHell.addIngredient(117, 4);
    Recipe.TheWrathOfHell.addIngredient(8251, 15);
    Recipe.TheWrathOfHell.addIngredient(8252, 2);
    Recipe.TheWrathOfHell.setRequiredTile(101);
    Recipe.TheWrathOfHell.add();

    //Трезубец адских огней
    Recipe.TheTridentofhellfires = Recipes.init(8256, 1);
    Recipe.TheTridentofhellfires.addIngredient(1445, 1);
    Recipe.TheTridentofhellfires.addIngredient(117, 8);
    Recipe.TheTridentofhellfires.addIngredient(8251, 6);
    Recipe.TheTridentofhellfires.addIngredient(8252, 20);
    Recipe.TheTridentofhellfires.add();

    //Гнев Дьявола 
    Recipe.TheWrathOfTheDevil = Recipes.init(8257, 1);
    Recipe.TheWrathOfTheDevil.addIngredient(8280, 1);
    Recipe.TheWrathOfTheDevil.addIngredient(117, 6);
    Recipe.TheWrathOfTheDevil.addIngredient(8251, 5);
    Recipe.TheWrathOfTheDevil.addIngredient(8252, 25);
    Recipe.TheWrathOfTheDevil.add();

    //Гнилая мачете
    Recipe.RottenMachete = Recipes.init(8258, 1);
    Recipe.RottenMachete.addIngredient(1166, 1);
    Recipe.RottenMachete.addIngredient(86, 30);
    Recipe.RottenMachete.addIngredient(521, 10);
    Recipe.RottenMachete.add();

    //Капюшон некроманта
    Recipe.NecromancerHood = Recipes.init(8260, 1);
    Recipe.NecromancerHood.addIngredient(8259, 8);
    Recipe.NecromancerHood.addIngredient(181, 3);
    Recipe.NecromancerHood.add();

    //Роба некроманта 
    Recipe.NecromancerRobe = Recipes.init(8261, 1);
    Recipe.NecromancerRobe.addIngredient(8259, 12);
    Recipe.NecromancerRobe.addIngredient(181, 4);
    Recipe.NecromancerRobe.add();

    //Сапоги некроманта
    Recipe.NecromancerBoots = Recipes.init(8262, 1);
    Recipe.NecromancerBoots.addIngredient(8259, 10);
    Recipe.NecromancerBoots.addIngredient(181, 3);
    Recipe.NecromancerBoots.add();

    //Метеоритный револьвер 
    Recipe.TheMeteorRevolver = Recipes.init(8264, 1);
    Recipe.TheMeteorRevolver.addIngredient(117, 18);
    Recipe.TheMeteorRevolver.setRequiredTile(16);
    Recipe.TheMeteorRevolver.add();

    //Шлем метеоритного стрелка 
    Recipe.MeteoriteShooterHelmet = Recipes.init(8265, 1);
    Recipe.MeteoriteShooterHelmet.addIngredient(117, 12);
    Recipe.MeteoriteShooterHelmet.setRequiredTile(16);
    Recipe.MeteoriteShooterHelmet.add();

    //Нагрудник метеоритного стрелка 
    Recipe.MeteoriteShooterBody = Recipes.init(8266, 1);
    Recipe.MeteoriteShooterBody.addIngredient(117, 20);
    Recipe.MeteoriteShooterBody.setRequiredTile(16);
    Recipe.MeteoriteShooterBody.add();

    //Ботинки метеоритного стрелка 
    Recipe.MeteoriteShooterBoots = Recipes.init(8267, 1);
    Recipe.MeteoriteShooterBoots.addIngredient(117, 16);
    Recipe.MeteoriteShooterBoots.setRequiredTile(16);
    Recipe.MeteoriteShooterBoots.add();

    //Морковный меч
    Recipe.CarrotSword = Recipes.init(8270, 1);
    Recipe.CarrotSword.addIngredient(8269, 10);
    Recipe.CarrotSword.add();

    //Морковный Шлем 
    Recipe.CarrotHelmet = Recipes.init(8271, 1);
    Recipe.CarrotHelmet.addIngredient(8269, 12);
    Recipe.CarrotHelmet.add();

    //Морковный Нагрудник 
    Recipe.CarrotBody = Recipes.init(8272, 1);
    Recipe.CarrotBody.addIngredient(8269, 18);
    Recipe.CarrotBody.add();

    //Морковные Ботинки  
    Recipe.CarrotBoots = Recipes.init(8273, 1);
    Recipe.CarrotBoots.addIngredient(8269, 14);
    Recipe.CarrotBoots.add();

    //Грибной Шляпа
    Recipe.MushroomHat = Recipes.init(8275, 1);
    Recipe.MushroomHat.addIngredient(5, 10);
    Recipe.MushroomHat.add();

    //Грибной Нагрудник 
    Recipe.MushroomBody = Recipes.init(8276, 1);
    Recipe.MushroomBody.addIngredient(5, 12);
    Recipe.MushroomBody.add();

    //Грибные Ботинки  
    Recipe.MushroomBoots = Recipes.init(8277, 1);
    Recipe.MushroomBoots.addIngredient(5, 8);
    Recipe.MushroomBoots.add();

    //Коса теней
    Recipe.ShadowScythe = Recipes.init(8285, 1);
    Recipe.ShadowScythe.addIngredient(1327, 1);
    Recipe.ShadowScythe.addIngredient(272, 1);
    Recipe.ShadowScythe.addIngredient(521, 18);
    Recipe.ShadowScythe.addIngredient(8293, 20);
    Recipe.ShadowScythe.setRequiredTile(18);
    Recipe.ShadowScythe.add();

    //Капюшон теневого мага хаоса
    Recipe.ChaosShadowMageHood = Recipes.init(8285, 1);
    Recipe.ChaosShadowMageHood.addIngredient(225, 15);
    Recipe.ChaosShadowMageHood.addIngredient(86, 10);
    Recipe.ChaosShadowMageHood.addIngredient(8293, 17);
    Recipe.ChaosShadowMageHood.setRequiredTile(86);
    Recipe.ChaosShadowMageHood.add();

    //Мантия теневого мага хаоса
    Recipe.ChaosShadowMageRobe = Recipes.init(8285, 1);
    Recipe.ChaosShadowMageRobe.addIngredient(225, 25);
    Recipe.ChaosShadowMageRobe.addIngredient(86, 15);
    Recipe.ChaosShadowMageRobe.addIngredient(8293, 20);
    Recipe.ChaosShadowMageRobe.setRequiredTile(86);
    Recipe.ChaosShadowMageRobe.add();

    //Сапоги теневого мага хаоса
    Recipe.ChaosShadowMageBoots = Recipes.init(8285, 1);
    Recipe.ChaosShadowMageBoots.addIngredient(225, 12);
    Recipe.ChaosShadowMageBoots.addIngredient(86, 12);
    Recipe.ChaosShadowMageBoots.addIngredient(8293, 16);
    Recipe.ChaosShadowMageBoots.setRequiredTile(86);
    Recipe.ChaosShadowMageBoots.add();

    //Капюшон теневого мага хаоса
    Recipe.ChaosShadowMageHood = Recipes.init(8285, 1);
    Recipe.ChaosShadowMageHood.addIngredient(225, 15);
    Recipe.ChaosShadowMageHood.addIngredient(1329, 10);
    Recipe.ChaosShadowMageHood.addIngredient(8293, 17);
    Recipe.ChaosShadowMageHood.setRequiredTile(86);
    Recipe.ChaosShadowMageHood.add();

    //Мантия теневого мага хаоса
    Recipe.ChaosShadowMageRobe = Recipes.init(8285, 1);
    Recipe.ChaosShadowMageRobe.addIngredient(225, 25);
    Recipe.ChaosShadowMageRobe.addIngredient(1329, 15);
    Recipe.ChaosShadowMageRobe.addIngredient(8293, 20);
    Recipe.ChaosShadowMageRobe.setRequiredTile(86);
    Recipe.ChaosShadowMageRobe.add();

    //Сапоги теневого мага хаоса
    Recipe.ChaosShadowMageBoots = Recipes.init(8285, 1);
    Recipe.ChaosShadowMageBoots.addIngredient(225, 12);
    Recipe.ChaosShadowMageBoots.addIngredient(1329, 12);
    Recipe.ChaosShadowMageBoots.addIngredient(8293, 16);
    Recipe.ChaosShadowMageBoots.setRequiredTile(86);
    Recipe.ChaosShadowMageBoots.add();

    //Наголовник Вампира
    Recipe.VampireHeadgear = Recipes.init(8289, 1);
    Recipe.VampireHeadgear.addIngredient(1198, 13);
    Recipe.VampireHeadgear.addIngredient(8214, 5);
    Recipe.VampireHeadgear.setRequiredTile(134);
    Recipe.VampireHeadgear.add();

    //Мантия Вампира
    Recipe.VampireCape = Recipes.init(8290, 1);
    Recipe.VampireCape.addIngredient(1198, 26);
    Recipe.VampireCape.addIngredient(8214, 7);
    Recipe.VampireCape.addIngredient(225, 10);
    Recipe.VampireCape.setRequiredTile(134);
    Recipe.VampireCape.add();

    //Сапоги Вампира
    Recipe.VampireLegs = Recipes.init(8291, 1);
    Recipe.VampireLegs.addIngredient(1198, 20);
    Recipe.VampireLegs.addIngredient(8214, 4);
    Recipe.VampireLegs.setRequiredTile(134);
    Recipe.VampireLegs.add();

    //Наголовник Вампира
    Recipe.VampireHeadgear = Recipes.init(8289, 1);
    Recipe.VampireHeadgear.addIngredient(391, 12);
    Recipe.VampireHeadgear.addIngredient(8214, 5);
    Recipe.VampireHeadgear.setRequiredTile(134);
    Recipe.VampireHeadgear.add();

    //Мантия Вампира
    Recipe.VampireCape = Recipes.init(8290, 1);
    Recipe.VampireCape.addIngredient(391, 24);
    Recipe.VampireCape.addIngredient(8214, 7);
    Recipe.VampireCape.addIngredient(225, 10);
    Recipe.VampireCape.setRequiredTile(134);
    Recipe.VampireCape.add();

    //Сапоги Вампира
    Recipe.VampireLegs = Recipes.init(8291, 1);
    Recipe.VampireLegs.addIngredient(391, 18);
    Recipe.VampireLegs.addIngredient(8214, 4);
    Recipe.VampireLegs.setRequiredTile(134);
    Recipe.VampireLegs.add();




}
//Главный каллбек
Callbacks.addCallback("initialize", () => {
	try {
	    setupItems();
	    setupRecipes();
	} catch(e) {
		print("error in initialize: " + e)
	}
});

//Для дебага
if (isDebug) Callbacks.addCallback("tick", () => {
    Player.sendChatMessage(Player.getHealth(),255,255,255,1000 ); 
});

//Рандом кол-ва для лута
function getRandomArbitrary(min, max) { 
return Math.random() * (max - min) + min; 
}


//Тик - действие 60 раз в сек
Callbacks.addCallback("tick", () => {

if(Conditions.condst.isApplied()) { 
Player.addBuff(77, 1) 
}

if(Conditions.condsf.isApplied()) { 
Player.addBuff(74, 1) 
}

if(Conditions.condsw1.isApplied()) { 
Player.addBuff(74, 1) 
}

if(Conditions.condsw2.isApplied()) { 
Player.addBuff(74, 1) 
}

if(Conditions.condsw3.isApplied()) { 
Player.addBuff(74, 1) 
}

if(Conditions.condsw4.isApplied()) { 
Player.addBuff(74, 1) 
}

if(Conditions.condsw5.isApplied()) { 
Player.addBuff(74, 1) 
}

if(Conditions.condsw6.isApplied()) { 
Player.addBuff(74, 1) 
}

if(Conditions.cond14.isApplied()) { 
Player.addBuff(109, 1) 
Player.addBuff(4, 2) 
}

  if(Conditions.cond26.isApplied()) { 
Player.addBuff(74, 1) 
Player.addBuff(116, 2) 
}

if(Conditions.cond38.isApplied()) { 
Player.addBuff(74, 1) 
}

if(Conditions.cond45.isApplied()) { 
Player.addBuff(3, 1) 
}





//Рандом чар для аксов  
var EnchantAcc = [ 0, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80]
randACC = EnchantAcc[Math.floor(Math.random() * EnchantAcc.length)];

//Рандом чар для инструментов 
var EnchantTool = [ 0, 36, 37, 38, 39, 40, 41, 53, 54, 55, 56, 57, 59, 60, 61]
randTool = EnchantTool[Math.floor(Math.random() * EnchantTool.length)];

//Рандом чар для cтрелкового оружия   
var EnchantGun = [ 0, 36, 37, 38, 39, 40, 41, 53, 54, 55, 56, 57, 59, 60, 61,  0, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,  0, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 58, 82]
randGUN = EnchantGun[Math.floor(Math.random() * EnchantGun.length)];

//Рандом чар для оружия ближнего боя 
var EnchantMelee = [ 0, 36, 37, 38, 39, 40, 41, 53, 54, 55, 56, 57, 59, 60, 61,  0, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 81]
randMelee = EnchantMelee[Math.floor(Math.random() * EnchantMelee.length)];

//Рандом чар для магического оружия   
var EnchantMag = [ 0, 36, 37, 38, 39, 40, 41, 53, 54, 55, 56, 57, 59, 60, 61,  0, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,  0, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 52, 83]
randMag = EnchantMag[Math.floor(Math.random() * EnchantMag.length)];

//Оружие
var ShadowScytheP = [ 274, 45]
ShadowScytheProj = ShadowScytheP[Math.floor(Math.random() * ShadowScytheP.length)];
Items.ShadowScythe.setProperty("shoot", ShadowScytheProj);
//Улучшенные статы 

//Радужный меч
Items.RainbowBlade.setProperty("rare", getRandomArbitrary(2,11));
Items.RainbowBlade.setProperty("colorR", getRandomArbitrary(1,255));
Items.RainbowBlade.setProperty("colorG", getRandomArbitrary(1,255));
Items.RainbowBlade.setProperty("colorB", getRandomArbitrary(1,255));

//Радужная кирка 
Items.RainbowPickaxe.setProperty("rare", getRandomArbitrary(2,11));
Items.RainbowPickaxe.setProperty("colorR", getRandomArbitrary(1,255));
Items.RainbowPickaxe.setProperty("colorG", getRandomArbitrary(1,255));
Items.RainbowPickaxe.setProperty("colorB", getRandomArbitrary(1,255));

//lgbt
Items.LGBT.setProperty("rare", getRandomArbitrary(2,11));
Items.LGBT.setProperty("colorR", getRandomArbitrary(2,255));
Items.LGBT.setProperty("colorG", getRandomArbitrary(2,255));
Items.LGBT.setProperty("colorB", getRandomArbitrary(2,255));

Items.RM.setProperty("rare", getRandomArbitrary(2,11));
Items.RM.setProperty("colorR", getRandomArbitrary(1,255));
Items.RM.setProperty("colorG", getRandomArbitrary(1,255));
Items.RM.setProperty("colorB", getRandomArbitrary(1,255));
 
});

//Для Лута с мобов.
Callbacks.addCallback("NPCLoot", (id, x, y, w, h) => {
    switch (id) {
        case 50: //Король слизней - молот
            if (Math.floor(Math.random() * 100) <= 20) World.spawnItem(x, y, w, h, 8192, 1, false, randTool, false);
            if (Math.floor(Math.random() * 100) <= 15) World.spawnItem(x, y, w, h, 8274, 1, false, randACC, false);
            break;
        case 127: //Скелетрон Прайм - ядро
            if (Math.floor(Math.random() * 100) <= 15) World.spawnItem(x, y, w, h, 8195, 1, false, randACC, false);
            break;
         case 243: //Лед голем 
            if (Math.floor(Math.random() * 100) <= 4) World.spawnItem(x, y, w, h, 8200, 1, false, randGUN, false);
            if (Math.floor(Math.random() * 100) <= 100) World.spawnItem(x, y, w, h, 2161, getRandomArbitrary(1,3), false, 0, false);
            break;
        case 262: //Плантера - ядро
            if (Math.floor(Math.random() * 100) <= 20) World.spawnItem(x, y, w, h, 8201, 1, false, randACC, false);
            break;
        case 283: //Некромант
            if (Math.floor(Math.random() * 100) <= 5) World.spawnItem(x, y, w, h, 8202, 1, false, 0, false);
            if (Math.floor(Math.random() * 100) <= 5) World.spawnItem(x, y, w, h, 8203, 1, false, 0, false);
            if (Math.floor(Math.random() * 100) <= 5) World.spawnItem(x, y, w, h, 8204, 1, false, 0, false);
            if (Math.floor(Math.random() * 100) <= 100) World.spawnItem(x, y, w, h, 8293, getRandomArbitrary(5,9), false, 0, false);
            break;
        case 284: //Некромант
            if (Math.floor(Math.random() * 100) <= 5) World.spawnItem(x, y, w, h, 8202, 1, false, 0, false);
            if (Math.floor(Math.random() * 100) <= 5) World.spawnItem(x, y, w, h, 8203, 1, false, 0, false);
            if (Math.floor(Math.random() * 100) <= 5) World.spawnItem(x, y, w, h, 8204, 1, false, 0, false);
            if (Math.floor(Math.random() * 100) <= 100) World.spawnItem(x, y, w, h, 8293, getRandomArbitrary(3,7), false, 0, false);
            break;
        case 113: //Стена плоти
            if (Math.floor(Math.random() * 100) <= 25) World.spawnItem(x, y, w, h, 8213, 1, false, randACC, false);
            break;
            if (Math.floor(Math.random() * 100) <= 2) World.spawnItem(x, y, w, h, 8281, 1, false, randMelee, false);
            break;
            if (Math.floor(Math.random() * 100) <= 5) World.spawnItem(x, y, w, h, 8282, 1, false, 1, false);
            break;
            if (Math.floor(Math.random() * 100) <= 7) World.spawnItem(x, y, w, h, 8283, 1, false, 1, false);
            break;
            if (Math.floor(Math.random() * 100) <= 5) World.spawnItem(x, y, w, h, 8284, 1, false, 1, false);
            break;1
        case 158: //Вампир
            if (Math.floor(Math.random() * 100) <= 5) World.spawnItem(x, y, w, h, 8214, getRandomArbitrary(1,3), false, 0, false);
            if (Math.floor(Math.random() * 100) <= 5) World.spawnItem(x, y, w, h, 1570, 1, false, 0, false);
            break;
        case 159: //Вампир
            if (Math.floor(Math.random() * 100) <= 5) World.spawnItem(x, y, w, h, 8214, getRandomArbitrary(1,3), false, 0, false);
            if (Math.floor(Math.random() * 100) <= 3) World.spawnItem(x, y, w, h, 1570, 1, false, 0, false);
            break;
        case 1003: //Шахтер вампир
            if (Math.floor(Math.random() * 100) <= 5) World.spawnItem(x, y, w, h, 8214, 1, false, 0, false);
            break;
        case 370: //Рыброн 
            if (Math.floor(Math.random() * 100) <= 100) World.spawnItem(x, y, w, h, 8220, getRandomArbitrary(5,15), false, 0, false);
            if (Math.floor(Math.random() * 100) <= 100) World.spawnItem(x, y, w, h, 8225, getRandomArbitrary(10,25), false, 0, false);
            if (Math.floor(Math.random() * 100) <= 10) World.spawnItem(x, y, w, h, 8246, 1, false, randMelee, false);
            break;
        case 103: //Медуза 
            if (Math.floor(Math.random() * 100) <= 1) World.spawnItem(x, y, w, h, 8220, getRandomArbitrary(1,3), false, 0, false);
            break;
        case 327: //Тыквенный король 
            if (Math.floor(Math.random() * 100) <= 2) World.spawnItem(x, y, w, h, 8230, 1, false, randMelee, false);
            break;
        case 251: //Глазор 
            if (Math.floor(Math.random() * 100) <= 10) World.spawnItem(x, y, w, h, 1570, 1, false, 0, false);
            break;
        case 244: //Радужный слизень 
            if (Math.floor(Math.random() * 100) <= 0.50) World.spawnItem(x, y, w, h, 8239, 1, false, randTool, false);
            if (Math.floor(Math.random() * 100) <= 0.50) World.spawnItem(x, y, w, h, 8240, 1, false, randMelee, false);
            if (Math.floor(Math.random() * 100) <= 0.009) World.spawnItem(x, y, w, h, 11998, 1, false, 1, false);
            break;
        case 221: //Осминог  
            if (Math.floor(Math.random() * 100) <= 0.05) World.spawnItem(x, y, w, h, 16674, 1, false, 0, false);
            break;
        case 59: //Лавовый слизень 
            if (Math.floor(Math.random() * 100) <= 3) World.spawnItem(x, y, w, h, 8251, getRandomArbitrary(1,2), false, 0, false);
            break;
        case 156: //Красный дьявол  
            if (Math.floor(Math.random() * 100) <= 6) World.spawnItem(x, y, w, h, 8251, getRandomArbitrary(1,3), false, 0, false);
            break;
        case 1019: //Архидемон  
            if (Math.floor(Math.random() * 100) <= 7) World.spawnItem(x, y, w, h, 8251, getRandomArbitrary(1,2), false, 0, false);
            break;
        case 151: //Лавовая летучая мышь  
            if (Math.floor(Math.random() * 100) <= 3) World.spawnItem(x, y, w, h, 8251, 1, false, 0, false);
            break;
        case 245: //Голем 
            if (Math.floor(Math.random() * 100) <= 100) World.spawnItem(x, y, w, h, 8252, getRandomArbitrary(10,18), false, 0, false);
            break;
        case 3: //Зомби
            if (Math.floor(Math.random() * 100) <= 25) World.spawnItem(x, y, w, h, 8259, getRandomArbitrary(1,3), false, 0, false);
            break;
        case 132: //Зомби
            if (Math.floor(Math.random() * 100) <= 15) World.spawnItem(x, y, w, h, 8259, getRandomArbitrary(1,3), false, 0, false);
            break;
        case 161: //Зомби
            if (Math.floor(Math.random() * 100) <= 15) World.spawnItem(x, y, w, h, 8259, getRandomArbitrary(1,3), false, 0, false);
            break;
        case 186: //Зомби
            if (Math.floor(Math.random() * 100) <= 25) World.spawnItem(x, y, w, h, 8259, getRandomArbitrary(1,3), false, 0, false);
            break;
        case 187: //Зомби
            if (Math.floor(Math.random() * 100) <= 15) World.spawnItem(x, y, w, h, 8259, getRandomArbitrary(1,3), false, 0, false);
            if (Math.floor(Math.random() * 100) <= 2) World.spawnItem(x, y, w, h, 8263, 1, false, 0, false);
            break;
        case 188: //Зомби
            if (Math.floor(Math.random() * 100) <= 25) World.spawnItem(x, y, w, h, 8259, getRandomArbitrary(1,3), false, 0, false);
            break;
        case 189: //Зомби
            if (Math.floor(Math.random() * 100) <= 15) World.spawnItem(x, y, w, h, 8259, getRandomArbitrary(1,3), false, 0, false);
            break;
        case 200: //Зомби
            if (Math.floor(Math.random() * 100) <= 25) World.spawnItem(x, y, w, h, 8259, getRandomArbitrary(1,3), false, 0, false);
            break;
        case 223: //Зомби
            if (Math.floor(Math.random() * 100) <= 30) World.spawnItem(x, y, w, h, 8259, getRandomArbitrary(1,3), false, 0, false);
            break;
        case 319: //Зомби
            if (Math.floor(Math.random() * 100) <= 35) World.spawnItem(x, y, w, h, 8259, getRandomArbitrary(1,3), false, 0, false);
            break;
        case 320: //Зомби
            if (Math.floor(Math.random() * 100) <= 15) World.spawnItem(x, y, w, h, 8259, getRandomArbitrary(1,3), false, 0, false);
            break;
        case 321: //Зомби
            if (Math.floor(Math.random() * 100) <= 15) World.spawnItem(x, y, w, h, 8259, getRandomArbitrary(1,3), false, 0, false);
            break;   
        case 1: //Слизень 
            if (Math.floor(Math.random() * 100) <= 1.5) World.spawnItem(x, y, w, h, 8263, 1, false, randMag, false);
            break;   
        case 50: //Слизень 
            if (Math.floor(Math.random() * 100) <= 1) World.spawnItem(x, y, w, h, 8263, 1, false, randMag, false);
            break;   
        case 381: //Слизень 
            if (Math.floor(Math.random() * 100) <= 1) World.spawnItem(x, y, w, h, 8263, 1, false, randMag, false);
            break;   
        case 16: //Слизень 
            if (Math.floor(Math.random() * 100) <= 1.5) World.spawnItem(x, y, w, h, 8263, 1, false, randMag, false);
            break;   
        case 183: //Слизень 
            if (Math.floor(Math.random() * 100) <= 1.5) World.spawnItem(x, y, w, h, 8263, 1, false, randMag, false);
            break;   
        case 147: //Слизень 
            if (Math.floor(Math.random() * 100) <= 1) World.spawnItem(x, y, w, h, 8263, 1, false, randMag, false);
            break;   
        case 184: //Слизень 
            if (Math.floor(Math.random() * 100) <= 1) World.spawnItem(x, y, w, h, 8263, 1, false, randMag, false);
            break;   
        case 204: //Слизень 
            if (Math.floor(Math.random() * 100) <= 1.5) World.spawnItem(x, y, w, h, 8263, 1, false, randMag, false);
            break;   
        case 225: //Слизень 
            if (Math.floor(Math.random() * 100) <= 1.5) World.spawnItem(x, y, w, h, 8263, 1, false, randMag, false);
            break; 
        case 380: //Слизень 
            if (Math.floor(Math.random() * 100) <= 1) World.spawnItem(x, y, w, h, 8263, 1, false, randMag, false);
            break;   
        case 381: //Слизень 
            if (Math.floor(Math.random() * 100) <= 1) World.spawnItem(x, y, w, h, 8263, 1, false, randMag, false);
            break;   
        case 382: //Слизень 
            if (Math.floor(Math.random() * 100) <= 1.5) World.spawnItem(x, y, w, h, 8263, 1, false, randMag, false);
            break;   
        case 383: //Слизень 
            if (Math.floor(Math.random() * 100) <= 1.5) World.spawnItem(x, y, w, h, 8263, 1, false, randMag, false);
            break;    
        case 384: //Слизень 
            if (Math.floor(Math.random() * 100) <= 1) World.spawnItem(x, y, w, h, 8263, 1, false, randMag, false);
            break;   
        case 385: //Слизень 
            if (Math.floor(Math.random() * 100) <= 1) World.spawnItem(x, y, w, h, 8263, 1, false, randMag, false);
            break;   
        case 386: //Слизень 
            if (Math.floor(Math.random() * 100) <= 1) World.spawnItem(x, y, w, h, 8263, 1, false, randMag, false);
            break;   
        case 387: //Слизень 
            if (Math.floor(Math.random() * 100) <= 1) World.spawnItem(x, y, w, h, 8263, 1, false, randMag, false);
            break;      
        case 174: //Чёртов ползун  
            if (Math.floor(Math.random() * 100) <= 1) World.spawnItem(x, y, w, h, 8268, 1, false, randMelee, false);
            break; 
        case 183: //Багряный слизень  
            if (Math.floor(Math.random() * 100) <= 0.5) World.spawnItem(x, y, w, h, 8268, 1, false, randMelee, false);
            break; 
        case 46: //Кролик  
            if (Math.floor(Math.random() * 100) <= 55) World.spawnItem(x, y, w, h, 8269, getRandomArbitrary(2,5), false, 0, false);
            break; 
        case 23: //Голова метеора 
            if (Math.floor(Math.random() * 100) <= 2) World.spawnItem(x, y, w, h, 8278, getRandomArbitrary(1,3), false, 0, false);
            break; 
        case 292: //Тактический скелет  
            if (Math.floor(Math.random() * 100) <= 1) World.spawnItem(x, y, w, h, 8279, 1, false, randGUN, false);
            break;
        case 21: //Cкелет 
            if (Math.floor(Math.random() * 100) <= 1) World.spawnItem(x, y, w, h, 8280, 1, false, randGUN, false);
            break; 
        case 201: //Cкелет  
            if (Math.floor(Math.random() * 100) <= 1) World.spawnItem(x, y, w, h, 8280, 1, false, randGUN, false);
            break; 
        case 202: //Cкелет  
            if (Math.floor(Math.random() * 100) <= 1) World.spawnItem(x, y, w, h, 8280, 1, false, randGUN, false);
            break; 
        case 203: //Cкелет 
            if (Math.floor(Math.random() * 100) <= 1) World.spawnItem(x, y, w, h, 8280, 1, false, randGUN, false);
            break; 
        case 253: //Жнец
            if (Math.floor(Math.random() * 100) <= 1) World.spawnItem(x, y, w, h, 8293, getRandomArbitrary(1,5), false, 0, false);
            break; 







    }

}); 
//Дроп с блока 
//SECRET 
 Items.RM = registerItem(11997);
 Items.LGBT = registerItem(11998);

 //x
    Items.LGBT.setProperty("damage", 9.6);
    Items.LGBT.setProperty("useTime", 15);
    Items.LGBT.setProperty("useAnimation", 10);
    Items.LGBT.setProperty("melee", true);
    Items.LGBT.setProperty("shoot", 250);
    Items.LGBT.setProperty("shoot", 251);
    Items.LGBT.setProperty("autoReuse", true);
    Items.LGBT.setProperty("knockback", 5);
    Items.LGBT.setProperty("crit", 69);
    Items.LGBT.setTexture("Item_RainbowSword.png");
    Items.LGBT.setProperty("shootSpeed", 9);
    Items.LGBT.setProperty("material", false);
    Items.LGBT.setProperty("value", 30000000);

    Items.RM.setTexture("Item_RM.png");


    predefineItem(11998, 'Rainbow Sword', 'Радужный Меч','Is that sword?','А это точно меч?','Drop me!','Выкинь меня',true); 
    predefineItem(11997, 'The Subject Of Ricardo Milos', 'Предмет Имени Рикардо Милоса','Sexy scorpion','Сексуальный скорпион','Drop me','Выкинь меня',true); 