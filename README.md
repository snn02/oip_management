# OIP Management

Репозиторий управленческих и методологических документов Отдела интернет-проектов (ОИП).  
Здесь собраны материалы по видению развития направления, стратегическим документам по функциональным блокам, а также база знаний по модели управления через цели, OKR и KPI.

## Что находится в репозитории

- стратегическое видение ОИП на 2025-2028 годы;
- документы по направлениям работы ОИП на 2026 год;
- приложения с расшифровкой метрик, KPI, KR и формул расчёта;
- база знаний по управленческой модели `Goals -> OKR -> KPI -> Motivation`;
- заготовленные каталоги под процессы и будущие стратегические блоки.

## Логика структуры

- `01-vision` содержит верхнеуровневое видение, миссию, векторы развития и стратегические инициативы;
- `02-strategy` содержит прикладные стратегии по направлениям ОИП и вспомогательные гайды по метрикам;
- `03-processes` зарезервирован под описание рабочих процессов и регламентов, сейчас пуст;
- `00-general-provisions` содержит общую методологическую базу знаний по управлению направлением.

## Основные документы

- [Видение развития ОИП на 2025-2028 гг.](./01-vision/oip-vision-2026-2028.md)
- [Модель управления Goals -> OKR -> KPI](./00-general-provisions/oip-management-model-goals-okr-kpi.md)
- [Глоссарий проекта](./00-general-provisions/glossary.md)
- [Продажи: стратегия](./02-strategy/01-sales/oip-sales-strategy-2026.md)
- [Продажи: метрики](./02-strategy/01-sales/oip-sales-metrics-guide.md)
- [Проектное направление: стратегия](./02-strategy/02-projects/oip-project-strategy-2026.md)
- [Проектное направление: метрики](./02-strategy/02-projects/oip-project-metrics-guide.md)
- [Сопровождение: стратегия](./02-strategy/03-support/oip-support-strategy-2026.md)
- [Сопровождение: метрики](./02-strategy/03-support/oip-support-metrics-guide.md)
- [СМБ / Service Factory: стратегия](./02-strategy/04-smb/oip-smb-strategy-2026.md)
- [СМБ / Service Factory: метрики](./02-strategy/04-smb/oip-smb-metrics-guide.md)
- [Delivery / группа разработки: стратегия](./02-strategy/05-delivery/oip-delivery-strategy-2026.md)
- [Delivery / группа разработки: метрики](./02-strategy/05-delivery/oip-delivery-metrics-guide.md)

## Дерево проекта

```text
oip_management/
|-- [01-vision/](./01-vision/)
|   `-- [oip-vision-2026-2028.md](./01-vision/oip-vision-2026-2028.md)
|-- [00-general-provisions/](./00-general-provisions/)
|   |-- [glossary.md](./00-general-provisions/glossary.md)
|   `-- [oip-management-model-goals-okr-kpi.md](./00-general-provisions/oip-management-model-goals-okr-kpi.md)
|-- [02-strategy/](./02-strategy/)
|   |-- [01-sales/](./02-strategy/01-sales/)
|   |   |-- [oip-sales-strategy-2026.md](./02-strategy/01-sales/oip-sales-strategy-2026.md)
|   |   `-- [oip-sales-metrics-guide.md](./02-strategy/01-sales/oip-sales-metrics-guide.md)
|   |-- [02-projects/](./02-strategy/02-projects/)
|   |   |-- [oip-project-strategy-2026.md](./02-strategy/02-projects/oip-project-strategy-2026.md)
|   |   `-- [oip-project-metrics-guide.md](./02-strategy/02-projects/oip-project-metrics-guide.md)
|   |-- [03-support/](./02-strategy/03-support/)
|   |   |-- [oip-support-strategy-2026.md](./02-strategy/03-support/oip-support-strategy-2026.md)
|   |   `-- [oip-support-metrics-guide.md](./02-strategy/03-support/oip-support-metrics-guide.md)
|   |-- [04-smb/](./02-strategy/04-smb/)
|   |   |-- [oip-smb-strategy-2026.md](./02-strategy/04-smb/oip-smb-strategy-2026.md)
|   |   `-- [oip-smb-metrics-guide.md](./02-strategy/04-smb/oip-smb-metrics-guide.md)
|   |-- [05-delivery/](./02-strategy/05-delivery/)
|   |   |-- [oip-delivery-strategy-2026.md](./02-strategy/05-delivery/oip-delivery-strategy-2026.md)
|   |   `-- [oip-delivery-metrics-guide.md](./02-strategy/05-delivery/oip-delivery-metrics-guide.md)
|   |-- [06-marketing/](./02-strategy/06-marketing/)        # пока пусто
|   |-- [07-hr/](./02-strategy/07-hr/)                      # пока пусто
|   `-- [08-finances/](./02-strategy/08-finances/)          # пока пусто
|-- [03-processes/](./03-processes/)                        # пока пусто
`-- [README.md](./README.md)
```

## Краткое описание разделов

### `00-general-provisions`

Общая база знаний по модели управления направлением: как связаны стратегические цели, OKR, KPI и мотивация руководителей. Также здесь лежит глоссарий терминов проекта.

### `01-vision`

Раздел задаёт общую рамку развития ОИП: миссию, внешние факторы, ключевые компетенции, векторы роста до 2028 года, целевые результаты и стратегические инициативы.

### `02-strategy`

Основной рабочий раздел репозитория. В нём для каждого направления фиксируются:

- стратегическая роль направления;
- цели и целевое состояние;
- OKR на 2026 год;
- KPI операционной эффективности;
- метрики, методики расчёта, отчётность.

На текущий момент наполнены направления:

- `01-sales` — продажи и управление входящим потоком, сделками, документами и дебиторской задолженностью;
- `02-projects` — проектное направление;
- `03-support` — сопровождение;
- `04-smb` — СМБ / Service Factory;
- `05-delivery` — delivery / группа разработки.

Папки `06-marketing`, `07-hr`, `08-finances` пока остаются заготовками под последующее наполнение.

### `03-processes`

Каталог под процессы, регламенты, схемы взаимодействия и операционные инструкции. На момент анализа файлов ещё не заполнен.

## Замечания по текущему состоянию

- Стратегии и метрики оформлены в Markdown и готовы для чтения прямо из Git-репозитория.
